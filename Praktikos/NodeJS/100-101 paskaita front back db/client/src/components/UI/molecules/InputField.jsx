import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputField = ({ labelText, inputType, name, id, placeholderText, value, onChangeF }) => {
  return (
    <div>
      <Label
        text={labelText}
        idFor={id}
      />
      <Input
        type={inputType}
        name={name}
        id={id}
        placeholderText={placeholderText}
        value={value}
        onChangeF={onChangeF}
      />
    </div>
  );
}
 
export default InputField;