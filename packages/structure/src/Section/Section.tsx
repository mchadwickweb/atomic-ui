import React from "react";

import "./Section.css";

export interface SectionProps {
  children: React.ReactNode;
  name: string;
  contain?: boolean;
}

export function Section({ children, name, contain = false }: SectionProps) {
  return (
    <section data-section={name}>
      {contain ? <div data-contain="true">{children}</div> : children}
    </section>
  );
}
