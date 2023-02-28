import { useSelector } from 'react-redux';

const CalculateIngresosXrubro = () => {
  const [mensaje, setMensaje] = useState("") //Agregar
  const rubros = useSelector(state => state.rubrosSlice.rubros);
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const inputRubro = useRef();



  const changeRubro = () =>{
    const msg = "";
    const calculo = 0;
    const rubroId = inputRubro.current.value;
    const rubro = rubros.filter(r => r.id ===rubroId)
    const filtro = movs.filter(movimiento => movimiento.categoria === rubroId);
     


    const ultimoMov = Number(filtro[filtro.length - 1].total)
    const penultimoMov = Number(filtro[filtro.length - 2].total)
  if(ultimoMov> penultimoMov){
    calculo = ultimoMov - penultimoMov
    msg = `Para el rubro ${rubro.nombre}, en la última compra has gastado $${calculo} pesos más que en la penúltima`
    setMensaje(msg)
  }
  if(ultimoMov<penultimoMov){
    calculo =  penultimoMov -ultimoMov
    msg = `Para el rubro ${rubro.nombre}, en la última compra has gastado $${calculo} pesos menos que en la penúltima`
    setMensaje(msg)

  }
  if(ultimoMov = penultimoMov){
    msg = `Para el rubro ${rubro.nombre}, en la última compra has gastado lo mismo que en la penúltima`
    setMensaje(msg)

  }
  }
    


    return (
      <form >

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Comprarar movimientos por rubro</h5>

            <select className="form-control my-2 my-sm-3 " onChange={changeRubro} ref={inputRubro}>
            <option value="sinValor">Seleccione rubro</option>
              {rubros.map(({ id, nombre }) => (
                <option key={id} value={id}>{nombre}</option>))}
            </select>
            <p className="form-control my-2 my-sm-3 ">{mensaje}</p>
            </div>
        </div>

      </div>
    </form>


    )
    
    ;
  
  } 