import Label from "../atoms/Label";
import type { LabelType } from "../atoms/Label";
import Input from "../atoms/Input";
import type { InputType } from "../atoms/Input";

export type FieldType = LabelType & InputType;

const InputField = ({ id, idFor, text, name, type, value, onChangeFunc }: FieldType) => {
  return (
    <div>
      <Label
        text={text}
        idFor={id}
      />
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={name}
        value={value}
        onChangeFunc={onChangeFunc}
      />
    </div>
  );
}

export default InputField;