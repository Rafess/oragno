import "./TextField.css";
import {useState} from 'react';
const TextField = (props) => {
    
    // let value = "";
    const [value, setValor] = useState('');
  const onType = (event) => {
    props.onChange(event.target.value);
    setValor(event.target.value);
    console.log(value)
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={value} onChange={onType} placeholder={`${props.placeholder} ${props.label}`} />
    </div>
  );
};

export default TextField;
