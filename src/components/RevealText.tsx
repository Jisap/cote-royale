"use client"

import { useGSAP } from "@gsap/react";
import { asText, RichTextField } from "@prismicio/client"
import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

type RevealTextProps = {
  field: RichTextField;
  id: string;
  className?: string;
  staggerAmount?: number;
  as?: React.ElementType;
  duration?: number;
  align?: "center" | "start" | "end";
}

export const RevealText = ({ 
  field,                                            // campo de texto enriquecido que viene de Prismic     
  id,                                               // id único para cada palabra
  className,                                        // Clases adicionales para cada contenedor 
  staggerAmount=0.1,                                // Controla el retraso entre la animación de cada palabra
  as: Component = "div",                            // Expecifica  que etiqueta html se usará como contenedor principal 
  duration=0.8,                                     // Duración de la animación de revelado de cada palabra
  align="start"                                     // Controla la alineación del texto
}: RevealTextProps) => {

  const componentRef = useRef<HTMLDivElement>(null);

  const words = asText(field).split(" ");           // asText(field): Esta función de Prismic convierte el contenido del RichTextField en una cadena de texto plano.
                                                    // split(" "): Divide la cadena en un array de palabras usando el espacio como delimitador. 
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)",    // Solo ejecuta la animación si el usuario no tiene activada la opción de "reducir movimiento" en el navegador
      () => {
        gsap.to(".reveal-text-word", {
          y: 0,                                          // Mueve a su posición original desde translate-y-[120%] (de abajo hacia arriba)
          stagger: staggerAmount,                        // Cada palabra comenzará su animación segundos después de la anterior
          duration,                                      // Duración de la animación para cada palabra
          ease: "power3.out",                            // Efecto de aceleración y desaceleración para la animación
        })
      }
    )

    mm.add("(prefers-reduced-motion: reduce)",            // Si la opción de "reducir movimiento" está activada, la animación se ejecuta de forma distinta a la original
      () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          stagger: 0,
          duration: 0.5,
          ease: "none",
          opacity: 1,
        })
      }
    )




    
  }, { scope: componentRef })

  return (
    <Component
      className={clsx(
        "reveal-text text-balance",
        align === "center" && "text-center",
        align === "end" && "text-right",
        align === "start" && "text-left",
        className,
      )}
      ref={componentRef}
    >
      {words.map((word, index) => (
        <span 
          key={`${word}-${index}-${id}`}
          className="mb-0 inline-block overflow-hidden pb-4"
        >
          <span className="reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform">
            {word}
            {index <words.length -1 // Si no es la última palabra, agregaremos un espacio al final de cada palabra
              ? <>&nbsp;</> 
              : null
            }
          </span>
        </span>
      ))}
    </Component>
  )
}
