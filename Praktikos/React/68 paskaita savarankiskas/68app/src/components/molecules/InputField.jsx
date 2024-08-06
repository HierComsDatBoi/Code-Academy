import Input from "../atoms/input/input";
import Label from "../atoms/label/Label";

const InputField = ({ text, type, name, id, placeholder, value, onChangeFunction }) => {
  return (
  <>
    <Label
      text={text}
      idFor={id}
    />
    <Input
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChangeFunction={onChangeFunction}
    />
  </>
    );
}

export default InputField;