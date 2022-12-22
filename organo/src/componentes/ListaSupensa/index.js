import './ListaSuspensa.css'

const ListaSupensa = (props) => {

    return(
        <div className='ListaSuspensa'>
            <label>{props.label}</label>

            <select onChange={evento => props.alterado(evento.target.value)} required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}


export default ListaSupensa