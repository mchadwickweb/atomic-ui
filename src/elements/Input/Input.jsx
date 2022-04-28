export const Label = ({ name, children }) => (
  <label htmlFor={name}>{children}</label>
);

export const Hint = (name, children) => <p id={`${name}-hint`}>{children}</p>;

export const Error = ({ name, children }) => (
  <p id={`${name}-error`} hidden>
    {children}
  </p>
);

export default Input = ({
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
      {error ? <Error></Error> : null}
      <input name={name} id={name} type={type} {...props} />
    </>
  );
};
{
  /*
<label for="full-name-1" class="coop-form__label">Full name</label>
<p id="full-name-1-error" class="coop-form__error" hidden></p>
<input id="full-name-1" class="coop-form__field coop-form__input" type="text" autocomplete="name" name="full-name-1"> */
}
