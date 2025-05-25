import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
//import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
//import { components } from "@/slices";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("fragance", uid).catch(() => notFound());

  return (
    <Bounded>
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className="relative">
          <PrismicNextImage 
            field={page.data.bottle_image}
            width={600}
            height={600}
            priority
            className="absolute top-[90%] -scale-y-100 mask-image-reflection-fade"
          />
          <PrismicNextImage
            field={page.data.bottle_image}
            width={600}
            height={600}
            priority
            className="relative"
          />
        </div>
      </div>
    </Bounded>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("fragance", uid).catch(() => notFound());

  return {
    title: asText(page.data.title) + " | Cote Royale",
    description: `Discover ${asText(page.data.title)}, the newest fragance from Cote Royale Paris.`,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("fragance");

  return pages.map((page) => ({ uid: page.uid }));
}