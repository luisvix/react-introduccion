import './App.css';
import {CreateOneTamal, ListOfTamales} from "./screens";
import {useRef, useState} from "react";
import {Button} from "@material-ui/core";

function App() {
  const [currentWindow, setCurrentWindow] = useState('Lista_de_tamales')
  const currentWindow2 = useRef('Lista_de_tamales')

  const handleClickChangeWindowButton = ()=>{
    setCurrentWindow('Crear_tamal')
  }

  return (
    <>
      <Button variant={'contained'} onClick={handleClickChangeWindowButton}>Cambiando estado</Button>
      {currentWindow==='Crear_tamal' && <CreateOneTamal /> }
      {currentWindow==='Lista_de_tamales' && <ListOfTamales />}
    </>
  );
}

export default App;
