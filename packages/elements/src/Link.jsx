import React from "react";
import PropTypes from "prop-types";

export function Link({ children, href, as }) {
  return (
    <a data-type={as} href={href}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.oneOf(["link", "button"]),
};

Link.defaultProps = {
  as: "link",
};
