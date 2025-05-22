import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn"
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { HiPlus } from "react-icons/hi2";



type FranganceDisplayProps = {
  id: string;
}

export const FranganceDisplay = async({ id }: FranganceDisplayProps) => {

  const client = createClient();
  const fragance = await client.getByID<Content.FraganceDocument>(id);

  return (
    <FadeIn
      className="relative z-20 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
    >
      <div className="absolute inset-0 z-0">
        <PrismicNextImage 
          field={fragance.data.feature_image}
          className="object-cover opacity-40 md:opacity-100"
          fill
          width={1150}
          quality={90}
          alt=""
        />
      </div>

      <FadeIn className="relative z-10 grid translate-y-8">
        <h3 className="font-display mb-3 text-5xl md:text-6xl lg:text-7xl">
          <PrismicText 
            field={fragance.data.title}
          />
        </h3>

        <p className="mb-8 text-base font-semibold text-gray-300">
          Eau de Parfum
        </p>

        <div className="mb-10 max-w-md text-lg text-gray-300">
          <PrismicRichText 
            field={fragance.data.description}
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <ButtonLink 
            document={fragance}
            variant="Secondary"
          >
            Discover
          </ButtonLink>

          <ButtonLink
            href="#"
            variant="Primary"   
          >
            <HiPlus className="mr-2" /> <span>Add to bag</span>
          </ButtonLink>
        </div>
      </FadeIn>

    </FadeIn>
  )
}