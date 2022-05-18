import React from "react";
import PropTypes from "prop-types";

import "./Section.css";

export function Section({ children, name, contain }) {
  return (
    <section data-section={name}>
      {contain ? <div data-contain="true">{children}</div> : children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  contain: PropTypes.bool,
};

Section.defaultProps = {
  contain: false,
};
