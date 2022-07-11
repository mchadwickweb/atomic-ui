import React from "react";

import "./Text.css";

export interface TextProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export function Text({ children, align = "left" }: TextProps) {
  return <p data-text-align={align}>{children}</p>;
}
