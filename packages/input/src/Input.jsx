import React from "react";
import PropTypes from "prop-types";

export function Input({
  name,
  type,
  autoComplete,
  hint,
  labelText,
  errorMessage,
  ...props
}) {
  return (
    <>
      {labelText ? <label htmlFor={name}>{labelText}</label> : null}
      {hint ? <p id={`${name}-hint`}>{hint}</p> : null}
      <p id={`${name}-error`} hidden>
        {errorMessage}
      </p>
      <input name={name} id={name} type={type} {...props} />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired, // may need to be array of strings
  labelText: PropTypes.string.isRequired,
  autoComplete: PropTypes.bool.isRequired,
};
