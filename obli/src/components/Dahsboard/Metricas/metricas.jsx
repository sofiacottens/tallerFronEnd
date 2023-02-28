import { useSelector } from 'react-redux';

const metricas = () => {
  const [mensaje, setMensaje] = useState("") //Agregar
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const rubros = useSelector(state => state.rubrosSlice.rubros);

  const inputRubro = useRef();
    const totalIngresos = 0
    const totalGastos = 0

    const rubrosIngresos = [];
    rubros.forEach(r => {
      if(r.tipo === 'ingreso'){
        rubrosIngresos.push(r.id)
      }
    });
    const movIngresos = movs.filter(movimiento => rubrosIngresos.includes(movimiento.categoria));
    const movGastos = movs.filter(movimiento => !rubrosIngresos.includes(movimiento.categoria));

    movGastos.forEach(mG =>{
        totalGastos += mG.total

    })
    movIngresos.forEach(mI =>{
        totalIngresos += mI.total

    })

    const diferencia = totalIngresos - totalGastos

    return (
      <form >

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Comprarar movimientos por rubro</h5>
            <label> className="form-control my-2 my-sm-3 "Ingresos</label>
            <p className="form-control my-2 my-sm-3 ">{totalIngresos}</p>
            <label className="form-control my-2 my-sm-3 ">Gastos</label>
            <p className="form-control my-2 my-sm-3 ">{totalGastos}</p>

            <label className="form-control my-2 my-sm-3 ">Diferencia</label>
            <p className="form-control my-2 my-sm-3 ">{diferencia}</p>


            </div>
        </div>

      </div>
    </form>


    )
    
    ;
  
  } 

  export default {metricas}