import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}
const InputWrapper = styled.div`
  position: relative;
  margin: 1rem;
  height: 3rem;
`;

const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  font-size: inherit;
  font-family: inherit;
  background: none;

  border-radius: 0.2rem;
  border: solid 1px var(--surface2);
  outline: none;
  padding: 0.8rem;

  &:hover {
    border-color: var(--surface4);
  }
  &:focus {
    border-color: var(--brand);
  }
  &:focus ~ label,
  &:not(:placeholder-shown)&:not(:focus) ~ label {
    top: -0.6rem;
    font-size: 0.8rem;
  }
`;
const FormLabel = styled.label`
  z-index: 1;
  position: absolute;
  left: 1rem;
  top: 0.6rem;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background: var(--surface1);
  padding: 0 0.5rem;
`;

const Input: FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <InputWrapper>
      <FormInput id={name} {...props} />
      <FormLabel htmlFor={name}>{label}</FormLabel>
    </InputWrapper>
  );
};

export default Input;
