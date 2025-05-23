import { IconType } from "react-icons";
import { LuCrown, LuDroplet, LuFlame, LuGem, LuTreePine, LuZap } from "react-icons/lu";

import { Content } from "@prismicio/client";


type AttributeData = {
  label: string,
  Icon: IconType,
}


const SCENT_PROFILES: Record<Content.FraganceDocumentData["scent_profile"], AttributeData> = { // Variantes de fragancia scent profile
  spicy: {label: "Spicy & Smoky", Icon: LuFlame},
  woody: {label: "Woody & Herbal", Icon: LuTreePine},
  fresh: {label: "Fresh & Aquatic", Icon: LuDroplet},
}

const MOODS: Record<Content.FraganceDocumentData["mood"], AttributeData> = { // Variantes de fragancia mood
  bold: { label: "Bold & Seductive", Icon: LuCrown },
  grounded: {label: "Grounded & Sophisticated", Icon: LuGem},
  refreshing: {label: "Refreshing & Invigorating", Icon: LuZap},
}

type FraganceAttributesProps = {                                     // Tipos para fragancias
  scentProfile: Content.FraganceDocumentData["scent_profile"],
  mood: Content.FraganceDocumentData["mood"],
  className?: string,
}

export const FraganceAttributes = ({ 
  scentProfile: providedScentProfile, 
  mood: providedMood, 
  className 
}: FraganceAttributesProps) => {

  const scentProfile = SCENT_PROFILES[providedScentProfile];
  const mood = MOODS[providedMood];

  return(
    <div className={className}>
      <p className="mb-2 text-base font-semibold uppercase">
        Features
      </p>

      <div className="grid gap-2">
        <p className="flex itemx-center gap-2">
          <scentProfile.Icon className="size-6" />
          {scentProfile.label}
        </p>
        <p className="flex itemx-center gap-2">
          <mood.Icon className="size-6" />
          {mood.label}
        </p>
      </div>
    </div>
  )

}