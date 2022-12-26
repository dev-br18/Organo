import Colaboradores from '../Colaboradores';
import cardVazio from '../CardVazio/Index';
import './Time.css'



const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={css}>

            <h3 style={{borderBottomColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaboradores key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
            
        </section>
    : cardVazio()
    )

}

export default Time;