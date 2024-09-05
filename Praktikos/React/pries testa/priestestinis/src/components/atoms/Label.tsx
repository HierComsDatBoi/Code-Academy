export type LabelType = {
  text: string,
  idFor: string
}

const Label = ({ text, idFor }: LabelType) => {
  return (
    <label
      htmlFor={idFor}
    >
      {text}
    </label>
  );
}

export default Label