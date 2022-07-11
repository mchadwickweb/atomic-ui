import React from "react";

import "./Heading.css";

export interface HeadingProps {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
}

export function Heading({ children, as, align = "left" }: HeadingProps) {
  switch (as) {
    case "h6":
      return <h6 data-heading-align={align}>{children}</h6>;
    case "h5":
      return <h5 data-heading-align={align}>{children}</h5>;
    case "h4":
      return <h4 data-heading-align={align}>{children}</h4>;
    case "h3":
      return <h3 data-heading-align={align}>{children}</h3>;
    case "h2":
      return <h2 data-heading-align={align}>{children}</h2>;
    default:
      return <h1 data-heading-align={align}>{children}</h1>;
  }
}
