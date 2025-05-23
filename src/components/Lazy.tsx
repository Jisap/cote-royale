"use client"

import { ComponentProps, useEffect, useRef, useState } from "react"

type LazyProps = ComponentProps<"div"> & {
  rootMargin?: string;
}

// Su propósito principal es mejorar el rendimiento inicial de la página 
// al no renderizar el contenido de children hasta que el componente Lazy 
// (el div contenedor) entre en el área visible del navegador (viewport).


export const Lazy = ({ rootMargin, children, ...restProps }: LazyProps) => {

  const [isInView, setIsInView] = useState(false);                      // Estado booleano que controla si los children deben ser renderizados o no
  const ref = useRef<HTMLDivElement>(null);                             // referencia al div  que contiene los children

  useEffect(() => {                                                     // Despues de que el componente se monta se ejecuta este useEffect 
    const currentRef = ref.current;

    const observer = new IntersectionObserver(                          // IntersectionObserver permite  ejecutar un callback cuando un elemento entra o sale del viewport   
      ([entry]) => {                                                    // Si el elemento observado 
        if(entry.isIntersecting) setIsInView(true)                      // es parcialmente visible se establece el estado isInView a true 
      },
    {
      rootMargin,                                                       // opciones: 1º El observer se dispara inmediantamente cuando el elemento entra en el viewport 
      threshold: 0,}                                                    //           2º Permite especificar un margen alrededor del elemento raíz 
    )

    if (currentRef) observer.observe(currentRef)                        // Si la referencia al div existe, se le dice al observer que comience a observar este elemento.

    return () => {                                                      // Se limpia el observer cuando el componente se desmonta o antes de que el efecto se vuelva a ejecutar
      if(currentRef) observer.unobserve(currentRef);
    }
  }, [rootMargin])


  return (
    <div ref={ref} {...restProps}>
      {isInView ? children : null}
    </div>
  )
}