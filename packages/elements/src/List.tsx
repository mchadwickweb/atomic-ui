import React from "react";

export interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return <li>{children}</li>;
}

export interface ListProps {
  children: React.ReactNode;
  as: string;
}

export function List({ as, children }: ListProps) {
  if (as === "ol") {
    return <ol role="list">{children}</ol>;
  }

  return <ul role="list">{children}</ul>;
}
