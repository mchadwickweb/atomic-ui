import React from "react";
import PropTypes from "prop-types";

import "./Text.css";

export function Text({ children, align }) {
  return <p data-text-align={align}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

Text.defaultProps = {
  align: "left",
};
