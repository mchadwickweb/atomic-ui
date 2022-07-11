import React, { AllHTMLAttributes } from "react";

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;

const validTypes = {
  text: "text",
  password: "password",
  email: "email",
  search: "search",
  number: "number",
  tel: "tel",
  url: "url",
};

export interface InputProps {
  id: FormElementProps["id"];
  name: FormElementProps["name"];
  type: keyof typeof validTypes;
  labelText: string;
  hint: string;
  errorMessage: string[];
  autoComplete?: FormElementProps["autoComplete"];
}

export function Input({
  id,
  name,
  type,
  labelText,
  hint,
  errorMessage,
  autoComplete,
}: InputProps) {
  return (
    <>
      {labelText ? <label htmlFor={id}>{labelText}</label> : null}
      {hint ? <p id={`${id}-hint`}>{hint}</p> : null}
      <p id={`${id}-error`} hidden={errorMessage ? false : true}>
        {errorMessage}
      </p>
      <input name={name} id={id} type={type} autoComplete={autoComplete} />
    </>
  );
}
