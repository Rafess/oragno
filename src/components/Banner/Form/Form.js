import "./Form.css";
import TextField from "../TextField/TextField";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2> Preencha os dados para criar o card do Colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu " />
        <TextField label="Cargo" placeholder="Digite seu " />
        <TextField label="Imagem" placeholder="Informe o endereço da " />
      </form>
    </section>
  );
};

export default Form;
