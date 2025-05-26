import { asLink, LinkField, PrismicDocument } from "@prismicio/client"
import { Link } from "next-view-transitions";
import React from "react"



export type TransitionLinkProps = {
  children?: React.ReactNode,                   
  className?: string,
  onClick?: () => void,
  tabIndex?: number,
} & (                                            // Unión de tipos
  | 
    { 
      field: LinkField | null;                   // field de Prismic tipo LinkField
      document?: never;
      href?: never;
    }
  | 
    { 
      field?: never | null; 
      document: PrismicDocument | null;          // document de Prismic tipo PrismicDocument
      href?: never;
    }
  | 
    { 
      field?: never;  
      document?: never;
      href: string;                              // href como string
    }
)

export const TransitionLink = ({
  field,
  document:doc,
  href,
  children,
  className,
  onClick,
  tabIndex,
}: TransitionLinkProps) => {

  // asLInk convierte los tipos de datos de enlace de Prismic (LinkField o PrismicDocument) en una cadena de texto
  //  que representa una URL navegable.

  const url = href ?? asLink(field ?? doc); // Si existe href se usa, sino se intenta obtener de field y sino existe tampoco de doc.

  if(!url){
    console.warn("TransitionLink: No url found");
    return null
  }

  return (
    <Link
      href={url}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      { field?.text ?? children }
    </Link>
  )
}