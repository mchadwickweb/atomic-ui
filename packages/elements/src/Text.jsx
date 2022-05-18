import React from "react";
import PropTypes from "prop-types";

export function Text({ children }) {
  return <p>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.element.isRequired,
};
