import React from "react";
import PropTypes from "prop-types";

export function Heading({ as, children }) {
  switch (as) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
    default:
      break;
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string.isRequired,
};
