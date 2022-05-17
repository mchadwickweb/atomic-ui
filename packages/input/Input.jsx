export const Label = ({ name, children }) => (
  <label htmlFor={name}>{children}</label>
);

export const Hint = (name, children) => <p id={`${name}-hint`}>{children}</p>;

export const ErrorMessage = ({ name, children }) => (
  <p id={`${name}-error`} hidden>
    {children}
  </p>
);

export const Input = ({
  name,
  type,
  autoComplete,
  hint,
  labelText,
  error,
  ...props
}) => {
  return (
    <>
      {labelText ? <Label name={name}>{labelText}</Label> : null}
      {hint ? <Hint name={name}>{hint}</Hint> : null}
      <ErrorMessage>{error}</ErrorMessage>
      <input name={name} id={name} type={type} {...props} />
    </>
  );
};
