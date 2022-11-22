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
  return (
    <div className="App">
        <Banner/>
        <Form onCollabRegister={collab => onNewCollabAdded(collab)}/>
        <Team name="Programação"/>
        <Team name="Frontend"/>
        <Team name="Data Science"/>
        <Team name="DevOps"/>
    </div>
  );
}

export default App;
