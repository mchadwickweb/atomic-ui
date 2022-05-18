import React from "react";
import PropTypes from "prop-types";

import "./Heading.css";

export function Heading({ children, as, align }) {
  switch (as) {
    case "h1":
      return <h1 data-heading-align={align}>{children}</h1>;
    case "h2":
      return <h2 data-heading-align={align}>{children}</h2>;
    case "h3":
      return <h3 data-heading-align={align}>{children}</h3>;
    case "h4":
      return <h4 data-heading-align={align}>{children}</h4>;
    case "h5":
      return <h5 data-heading-align={align}>{children}</h5>;
    case "h6":
      return <h6 data-heading-align={align}>{children}</h6>;
    default:
      break;
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

Heading.defaultProps = {
  align: "left",
};
