import React from "react";
import PropTypes from "prop-types";

export function Link({ children, href }) {
  return <a href={href}>{children}</a>;
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
