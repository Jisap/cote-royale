import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";

import { RevealText } from "@/components/RevealText";
import { FranganceDisplay } from "./FraganceDisplay";

/**
 * Props for `FraganceList`.
 */
export type FraganceListProps = SliceComponentProps<Content.FraganceListSlice>;

/**
 * Component for "FraganceList" Slices.
 */
const FraganceList: FC<FraganceListProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-8 bg-blacl py-16 text-center text-white md:py-24"
    >
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[0.2em] uppercase">
          {slice.primary.eyebrow}
        </p>

        <RevealText
          field={slice.primary.heading}
          as="h2"
          id={`fragance-list-heading-${slice.id}`}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        />
        
        <div className="mx-auto max-w-2xl text-lg text-balance text-gray-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="grid mt-12 grid-cols-1 gap-12">
          {slice.primary.fragances.map((item) => { 
            if(isFilled.contentRelationship(item.fragance)) { // Verifica que el campo item.fragance tiene un documento enlazado.
              return (
                <FranganceDisplay 
                  key={item.fragance.id} 
                  id={item.fragance.id}  
                />
              )
            } 
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default FraganceList;
