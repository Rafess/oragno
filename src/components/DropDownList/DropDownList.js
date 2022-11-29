import './DropDownList.css';
const DropDownList = (props) => {
  
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} value={props.value}>
                <option value=''></option>
               {  props.itens.map(item => <option key={item}>{item}</option>)} 
            </select>
        </div>
    )
}

export default DropDownList;