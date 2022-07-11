import React, { AllHTMLAttributes } from "react";

type InputElementProps = AllHTMLAttributes<HTMLInputElement>;

const validInputTypes = {
  text: "text",
  password: "password",
  email: "email",
  search: "search",
  number: "number",
  tel: "tel",
  url: "url",
};

export interface TextFieldProps {
  id: InputElementProps["id"];
  name: InputElementProps["name"];
  type: keyof typeof validInputTypes;
  value?: InputElementProps["value"];
  labelText: string;
  hint?: string;
  errorMessage?: string;
  autoComplete?: InputElementProps["autoComplete"];
}

export function TextField({
  id,
  name,
  type,
  value,
  labelText,
  hint,
  errorMessage,
  autoComplete,
}: TextFieldProps) {
  return (
    <>
      {labelText ? <label htmlFor={id}>{labelText}</label> : null}
      {hint ? <p id={`${id}-hint`}>{hint}</p> : null}
      <p id={`${id}-error`} hidden={errorMessage ? false : true}>
        {errorMessage}
      </p>
      <input
        name={name}
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
      />
    </>
  );
}
