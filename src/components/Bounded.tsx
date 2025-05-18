import { ElementType, ReactNode, forwardRef } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

// Ajusta el espaciado superior de una sección que viene justo después de un encabezado (header) que podría ser fijo
// o tener una altura específica, y necesitas que el contenido no quede oculto debajo, 
// ajustando ese espaciado de forma diferente en móviles y en escritorio.

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          // Normalmente tendrá un px-6 pero si un elemento con la clase header precede a este componente Bounded se le añade un pt-44
          "px-6 [.header+&]:pt-44 [.header+&]:md:pt-32",
          className,
        )}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
