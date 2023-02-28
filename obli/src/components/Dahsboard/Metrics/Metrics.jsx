import { useSelector } from 'react-redux';
import './Metrics.css';
import { useRef, useState } from 'react';
import { ComprarPorRubro } from './ComparacionPorRubro/compraracion';

const Metrics = () => {
    const rubros = useSelector(state => state.rubrosSlice.rubros);
    const inputRubro = useRef();
    const [mens, setMensaje] = useState('');

    const _changeRubro = () => {
        const rubroId = inputRubro.current.value;
        console.log('loggea ok'); //loggea ok
        try {
            setMensaje(ComprarPorRubro(rubroId));
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <h5 className="card-title row">Comprare movimientos por rubro aqui:</h5>
            <br />
            <form className='row'>
                <div className="card">
                    <select className="form-control my-2 my-sm-3 " ref={inputRubro} onChange={_changeRubro}>
                        <option value="sinValor">Seleccione rubro</option>
                        {rubros.map(({ id, nombre }) => (
                            <option key={id} value={id}>{nombre}</option>))}
                    </select>
                </div>
            </form>
            <div className='container metrics'>
                <div className='row'>
                    <div className='col-sm'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Resultado:</h5>
                                <p className='card-text'>
                                    <span className='badge bg-secondary'>
                                        {mens}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Metrics;