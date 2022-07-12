import React from "react";
export interface BlockquoteProps {
  children: React.ReactNode;
  cite?: string;
}

export function Blockquote({ children, cite }: BlockquoteProps) {
  return <blockquote cite={cite}>{children}</blockquote>;
}
