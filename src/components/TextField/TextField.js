import './TextField.css';
const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={`${props.placeholder} ${props.label}`}/>
        </div>
    )
};

export default TextField;
