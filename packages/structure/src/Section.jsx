import React from "react";
import PropTypes from "prop-types";

export function Section({ children, name }) {
  return <section data-section={name}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};
