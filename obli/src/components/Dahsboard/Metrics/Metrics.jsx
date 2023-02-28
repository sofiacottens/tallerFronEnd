import { useSelector } from 'react-redux';
import './Metrics.css';
import { useRef, useState } from 'react';
import { ChangeRubro } from './ComparacionPorRubro/compraracion';

const Metrics = () => {
    const rubros = useSelector(state => state.rubrosSlice.rubros);
    const inputRubro = useRef();
    let mens = '';

    const _changeRubro = () => {
        const rubroId = inputRubro.current.value;
        mens = ChangeRubro(rubroId);
    }

    const _mostrarMensaje = (mensaje) => {
        //mens = mensaje;
    }

    return (
        <>
            <h5 className="card-title row">Comprarar movimientos por rubro</h5>
            <form className='row'>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <select className="form-control my-2 my-sm-3 " onChange={_changeRubro} ref={inputRubro}>
                                <option value="sinValor">Seleccione rubro</option>
                                {rubros.map(({ id, nombre }) => (
                                    <option key={id} value={id}>{nombre}</option>))}
                            </select>
                        </div>
                    </div>

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

export default Metrics