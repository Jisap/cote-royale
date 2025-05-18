import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

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
      <PrismicNextImage 
        field={slice.primary.image} 
        alt="" 
        priority
        fill
        className="object-cover"  
      />
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      
      {slice.primary.button.map((link) => (
        <PrismicNextLink
          key={link.key}
          field={link}
          className={link.variant}
        />
      ))}

    </Bounded>
  );
};

export default Hero;
