const Input = ( {type,name, id, placeholder, value,onChangeFunction} ) => {
  return ( 
    <input
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChangeFunction}
    />
   );
}
 
export default Input;