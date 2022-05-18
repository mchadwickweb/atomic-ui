import React from "react";
import PropTypes from "prop-types";

export function ListItem({ children }) {
  return <li>{children}</li>;
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export function List({ as, children }) {
  switch (as) {
    case "ul":
      return <ul role="list">{children}</ul>;
    case "ol":
      return <ol role="list">{children}</ol>;
    default:
      break;
  }
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string.isRequired,
};
