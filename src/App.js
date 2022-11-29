import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Team from "./components/Team/Team";

function App() {
  const [colabs, setCollabs] = useState([]);
  const onNewCollabAdded = (collab) => {
    console.log(collab)
    setCollabs([...colabs, collab]);
  }
  const times = [
    {    
    nome:'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9',
    },
    {    
      nome:'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {    
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {    
      nome:'DevOps',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
    },{    
      nome:'UI/UX Design',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5',
    },{    
      nome:'Mobile',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9',
    },{    
      nome:'Compliance',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
    }
  ];
  return (
    <div className="App">
        <Banner/>
        <Form onCollabRegister={collab => onNewCollabAdded(collab)} times={times.map((time) => time.nome)}/>
        {times.map(time => 
        <Team key={time.nome} nome={time.nome} teams={times} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>
        )}
    </div>
  );
}

export default App;
