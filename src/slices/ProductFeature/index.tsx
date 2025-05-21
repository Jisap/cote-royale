import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `ProductFeature`.
 */
export type ProductFeatureProps =
  SliceComponentProps<Content.ProductFeatureSlice>;

/**
 * Component for "ProductFeature" Slices.
 */
const ProductFeature: FC<ProductFeatureProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.description} />
      <PrismicNextImage field={slice.primary.image} />
      <PrismicNextLink field={slice.primary.fragance}>
        Link
      </PrismicNextLink>
    </Bounded>
  );
};

export default ProductFeature;
