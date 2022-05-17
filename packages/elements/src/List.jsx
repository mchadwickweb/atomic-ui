import React from "react";

export const ListItem = ({ children }) => <li>{children}</li>;

export const List = ({ as, children }) => {
  switch (as) {
    case "ul":
      return <ul>{children}</ul>;
    case "ol":
      return <ol>{children}</ol>;
    default:
      break;
  }
};
