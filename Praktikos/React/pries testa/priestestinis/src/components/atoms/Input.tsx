import React from "react";

export type InputType = {
  type: string,
  name: string,
  id: string,
  placeholder: string,
  value: string,
  onChangeFunc: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Input = ({ type, name, id, placeholder, value, onChangeFunc }: InputType) => {
  return (
    <input
      type={type}
      name={name} id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChangeFunc}
    />
  );
}

export default Input;