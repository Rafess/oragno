import './Collaborator.css';

const Collaborator = ({name, cargo, imagem}) => {
    return(
        <div className="colaborador">
            <div className='cabecalho'>
                <img src={imagem} alt={`ícone ${name}`}/>
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
};

export default Collaborator;