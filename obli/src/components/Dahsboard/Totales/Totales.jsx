import './Totales.css';
import Metricas from './metricasTotales/metricas';

const Totales = () => {
    let gastos = 0;
    let ingresos = 0;
    let saldo = 0;

    const _mostrarTotales = () => {
        const arrayDatos = Metricas();
        const dato = arrayDatos[0];
        saldo = dato.dif;
        ingresos = dato.ingreso;
        gastos = dato.gasto;
    }

    _mostrarTotales();

    return (
        <>
            <h5 className="card-title row">Montos totales:</h5>
            <div className='container metrics'>
                <div className='row'>
                    <div className='col-sm'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Total de gastos</h5>
                                <p className='card-text'>
                                    <span className='badge bg-secondary'>
                                        {gastos}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Ingresos</h5>
                                <p className='card-text'>
                                    <span className='badge bg-success'>
                                        {ingresos}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Saldo restante</h5>
                                <p className='card-text'>
                                    <span className='badge bg-danger'>
                                        {saldo}
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

export default Totales;