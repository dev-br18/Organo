import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSupensa from '../ListaSupensa'
import Botao from '../Botão'
import { useState } from 'react'
const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data-Seience',
        'Devops',
        'Ux e Designer',
        'Inovação e Gestão'
    
      ]

    const [nome,setNome]= useState('')
    const [cargo,setCargo]= useState('')
    const [imagem,setImagem]= useState('')
    const [time,setTime]= useState('')

      const aoSalvar = (evento) =>{ 
        evento.preventDefault() //Funçao Para Nao Reiniciar o Navegador
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
      }
    return(
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha Os Dados Para Criar o Card Do Colaborador</h2>
            <CampoTexto obrigatorio={true} 
            label= 'Nome' 
            placeholder='Digite Seu Nome....'
            valor={nome}
            alterado = {valor => setNome(valor)}
            
            />
            <CampoTexto obrigatorio={true} 
            
            label= 'Cargo'
            
            placeholder='Digite Seu Cargo....'

            valor={cargo}
            alterado={valor =>setCargo(valor)}
            
            />
            <CampoTexto 
            label= 'Imagem' 
            placeholder='Digite o Endereço Da Imagem....'
            valor={imagem}
            alterado={valor => setImagem(valor)}
            />
            
            <ListaSupensa 
            obrigatorio={true}
             label='Time'
             itens={times}
             valor={time}
             alterado={valor => setTime(valor)}
             
             />
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}


export default Formulario