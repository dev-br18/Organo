import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import ListaSupensa from './componentes/ListaSupensa';

function App() {


const [colaboradores,setColaboradores] = useState([])

const novoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
  setColaboradores([...colaboradores,colaborador])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario colaboradorCadastrado = {colaborador => novoColaboradorAdicionado(colaborador)}/>
      
    </div>
  );
}

export default App;
