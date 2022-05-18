import React from "react";
import PropTypes from "prop-types";

export function Blockquote({ children, cite }) {
  return <blockquote cite={cite}>{children}</blockquote>;
}

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  cite: PropTypes.string,
};

Blockquote.defaultProps = {
  cite: null,
};
