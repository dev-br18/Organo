import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import ListaSupensa from './componentes/ListaSupensa';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

const times =[
  {
    nome: 'Programaçao',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Data-Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Ux Designer',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }
]

const [colaboradores,setColaboradores] = useState([])

const novoColaboradorAdicionado = (colaborador) => {
  setColaboradores([...colaboradores,colaborador])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)}  colaboradorCadastrado = {colaborador => novoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
