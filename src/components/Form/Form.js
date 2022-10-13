import "./Form.css";
import TextField from "../TextField/TextField";
import DropDownList from "../DropDownList/DropDownList";
import Button from "../Button/Button";

const Form = () => {
  const times = ['Programação', 'Front-End', 'Data Science', 'DevOps', 'UI/UX Design', 'Mobile', 'Compliance'];
  return (
    <section className="form">
      <form>
        <h2> Preencha os dados para criar o card do Colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu " />
        <TextField label="Cargo" placeholder="Digite seu " />
        <TextField label="Imagem" placeholder="Informe o endereço da " />
        <DropDownList label="Time" itens={times}/>
        <Button>Criar Card</Button>
      </form>
    </section> 
  );
};

export default Form;
