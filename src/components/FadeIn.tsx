"use client"

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FadeInProps ={
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  start?: string;
  className?: string;
}

export const FadeIn = ({ 
  children, 
  start = "top 80%", // Empieza cuando el componente ocupa el 80% de la pantalla desde la parte superior
  vars={}, 
  className 
}: FadeInProps) => {
  
  const containerRef = useRef<HTMLDivElement>(null);

  
  
    useGSAP(
      () => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)",    // Solo ejecuta la animación si el usuario no tiene activada la opción de "reducir movimiento" en el navegador
          () => {
            gsap.to(containerRef.current, {
              duration: 5,
              opacity: 1,
              ease: "power3.out",
              y: 0,
              ...vars,
              scrollTrigger: {
                trigger: containerRef.current,
                start
              }
            })
          }
        )

        mm.add("(prefers-reduced-motion: reduce)",    // Si la opción de "reducir movimiento" está activada, la animación se ejecuta de forma distinta a la original
          () => {
            gsap.to(containerRef.current, {
              duration: .5,
              opacity: 1,
              ease: "none",
              y: 0,
              stagger: 0
            })
          }
        )
      }, { scope: containerRef }
    )
  
  return (
    <div 
      ref={containerRef}
      className={clsx("opacity-0" , className)}
    >
      { children }
    </div>
  )
}