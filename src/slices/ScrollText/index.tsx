"use client"

import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { asText } from "@prismicio/client/richtext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)


/**
 * Props for `ScrollText`.
 */
export type ScrollTextProps = SliceComponentProps<Content.ScrollTextSlice>;

/**
 * Component for "ScrollText" Slices.
 */
const ScrollText: FC<ScrollTextProps> = ({ slice }) => {

  const componentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null); 
  const contentRef = useRef<HTMLDivElement>(null); 


  const words = asText(slice.primary.text).split(" "); // Convertir el texto enriquecido en un array de palabras

  useGSAP(() => {
    const component = componentRef.current;
    const contentElement = contentRef.current;
    const textElement = textRef.current;
    const letters = textElement?.querySelectorAll("span"); 

    if(!component || !contentElement || !textElement || !letters) return; // Si no hay un componente, no se ejecuta la animación

    // set initial blur and color
    gsap.set(contentElement, { filter: "blur(40px)" }); // Inicializar el desenfoque del componente
    gsap.set(letters, {color: "hsl(220, 9%, 20%)"})   // Inicializar el color de las letras

    // Animacion de desenfoque ligado al ScrollTrigger
    gsap.to(contentElement,{
      filter: "blur(0px)",      // Eliminar el desenfoque
      duration: 1,              // Duración de la animación
      scrollTrigger:{
        trigger: component,     // El componente que activa el ScrollTrigger
        start: "top 75%",       // Empieza cuando el componente ha entrado un 25% en la parte inferior de la ventana
        end: "top top",         // La animación terminará cuando el borde superior de tu componente ScrollText (trigger) alcance el borde superior de la ventana.
        scrub: 2,               // Vincula el progreso de la animación al desplazamiento de la página con un retraso de 2 segundos.
      },
    });

    // Animacion de color ligado al ScrollTrigger
    const colorTl = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: "top top",       // Empieza cuando la parte superior del componente alcanza la parte superior de la ventana
        end: "bottom -100%",    // Termina cuando la parte inferior del componente esta por encima de la ventana visible
        scrub: 2,
        pin: true               // Mantiene el color hasta que se alcance el final del ScrollTrigger
      }
    });
  
    colorTl.to(letters, {
      color: "white", // Cambiar el color de las letras
      stagger: {
        each: 0.01, // Retraso entre cada letra
        from: "start",
        ease: "power1.out"
      }    
    })    

    colorTl.to(".glow-background", {
      opacity: 1,
      ease: "power2.out",
      duration: 1
    })


  }, {scope: componentRef});            // Inicializar GSAP para el componente

  return (
    <Bounded
      ref={componentRef}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-screen items-center justify-center bg-neutral-950 relative"
    >
      <div className="glow-background absolute inset-0 z-0 w-full h-full opacity-0"></div>
      <div className="absolute inset-0 bg-[url('/noisetexture.jpg')] opacity-30 mix-blend-multiply"></div>


      <div ref={contentRef}>
        <div className="mb-2 text-center text-sm tracking-wider text-neutral-200 uppercase md:mb-8 md:text-base">
          {slice.primary.eyebrow}
        </div>
    
        {/* Paragraph */}
        <div 
          ref={textRef}
          className="text-center"
        >
          <p className="font-display flex flex-wrap justify-center text-5xl leading-tight text-balance uppercase md:text-7xl">
            {words.map((word, index) => (                  // Por cada palabra 
              <span 
                key={`${word}-${index}`}
                className="inline"  
              >
                {word.split("").map((char, charIndex) => ( // obtendremos un caracter envuelto en un span
                  <span
                    key={`${char}-${charIndex}`}
                    className="inline"
                  >
                    {char}
                  </span>
                ))}
                
                {index < words.length -1                   // Si no es la última palabra, agregaremos un espacio al final de cada palabra
                  ? (<span className="inline">
                        &nbsp;
                      </span> ) 
                  : null
                }
                  
             
              </span>
            ))}
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default ScrollText;
