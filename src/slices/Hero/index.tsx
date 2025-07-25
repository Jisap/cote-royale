

import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ButtonLink } from "@/components/ButtonLink";

gsap.registerPlugin(useGSAP);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {

  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <FadeIn 
        className="bg-image absolute inset-0 motion-safe:scale-125"
        vars={{
          scale: 1,
          opacity: .5
        }}  
      >
        <PrismicNextImage 
          field={slice.primary.image} 
          alt="" 
          priority
          fill
          className="object-cover motion-reduce:opacity-50"  
          />
      </FadeIn>

      <div className="relative flex flex-col h-screen justify-center">
        <RevealText 
          className="max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl font-display"
          id="hero-heading"
          field={slice.primary.heading}
          staggerAmount={0.2}
          duration={1.7}
          as="h1"
        />
          
        
        <FadeIn 
          className="mt-6 max-w-md text-lg text-neutral-100 translate-y-8"
          vars={{
            delay: 1,
            duration: 1.3,
          }}
        >
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>
        
        <FadeIn 
          className="mt-8 translate-y-5"
          vars={{
            delay: 1.7,
            duration: 1.1
          }}  
        >
          {slice.primary.button.map((link) => ( // link representa todas las opciones definidas en la prop button del slide de hero
            // <PrismicNextLink
            //   key={link.key}
            //   field={link}
            //   className={clsx(
            //     "inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300",
            //     link.variant === "Secondary" 
            //       ? "border border-white text-white hover:bg-white/20" 
            //       : "bg-white text-black hover:bg-white/80",
            //       "w-fit"
            //   )}
            // />

            <ButtonLink
              key={link.key}
              field={link}
              className="w-fit"
              variant="Secondary"
            />

          ))}
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default Hero;
