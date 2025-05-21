import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { asText } from "@prismicio/client/richtext";

/**
 * Props for `ScrollText`.
 */
export type ScrollTextProps = SliceComponentProps<Content.ScrollTextSlice>;

/**
 * Component for "ScrollText" Slices.
 */
const ScrollText: FC<ScrollTextProps> = ({ slice }) => {

  const words = asText(slice.primary.text).split(" "); // Convertir el texto enriquecido en un array de palabras

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-screen items-center justify-center bg-neutral-950 relative"
    >
      <div className="glow-background absolute inset-0 z-0 w-full h-full --opacity-0"></div>
      <div className="absolute inset-0 bg-[url('/noisetexture.jpg')] opacity-30 mix-blend-multiply"></div>


      <div>
        <div className="mb-2 text-center text-sm tracking-wider text-neutral-200 uppercase md:mb-8 md:text-base">
          {slice.primary.eyebrow}
        </div>
    
        {/* Paragraph */}
        <div className="text-center">
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
