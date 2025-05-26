
import { createClient } from "@/prismicio";
import { formatPrice } from "@/utils/formatters";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { TransitionLink } from "./TransitionLink";


type OtherFrangancesProps = {
  currentFragancesUid: string,
}

export const OtherFrangances = async({currentFragancesUid}: OtherFrangancesProps) => {

  const client = createClient();
  const allFrangances = await client.getAllByType("fragance");

  const otherFrangances = allFrangances.filter(fragance => fragance.uid !== currentFragancesUid);

  return (
    <div className="container mx-auto px-4">
      <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
        You may also like
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherFrangances.map(fragance => (
          <li key={fragance.uid} className="relative">
            <TransitionLink 
              document={fragance} 
              className="group"
            >
              <div className="relative aspect-square w-full transition-transform duration-500 group-hover:scale-105 ">
                <PrismicNextImage 
                  field={fragance.data.bottle_image}
                  width={600}
                  height={600}
                  alt=""
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-8 space-y-1 text-white">
                <h3 className="font-display text-2xl">
                  <PrismicText field={fragance.data.title} />
                </h3>
                <p className="text-sm text-neutral-400">
                  Eau de Parfum
                </p>
                <p className="text-base font-light">
                  {formatPrice(fragance.data.price)}
                </p>
              </div>

            </TransitionLink>
          </li>
        ))}
      </ul>
    </div>
  )
}