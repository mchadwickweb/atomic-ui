import React from "react";

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  as: "link" | "button";
}

export function Link({ children, href, as = "link" }: LinkProps) {
  return (
    <a data-type={as} href={href}>
      {children}
    </a>
  );
}
