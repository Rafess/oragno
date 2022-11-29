import Collaborator from '../Collaborator/Collaborator';
import './Team.css'

const Team = (props) => {

    return(
    props.collaborators.length > 0 && 
    <section className='team' style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className='collabs'>
        {props.collaborators.map((collab) => 
        <Collaborator 
        key={collab.name} 
        name={collab.name} 
        cargo={collab.cargo} 
        imagem={collab.imagem}
        corDeFundo={props.corPrimaria}
        />
        )}
        </div>
    </section> );
}

export default Team;