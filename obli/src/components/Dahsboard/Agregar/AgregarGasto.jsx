import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovimiento } from '../../../app/slices/movimientosSlice'
import { agregarMovimiento , rubros} from '../../../services/Api'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AgregarGasto = () => {
  //Redux States
  const userLogged = useSelector((state) => state.user.data);
  const rubross = useSelector((state) => state.rubros.data);

  const dispatch = useDispatch();

  //states
  //const [moneda, cambiarMoneda] = useState({});
  const [idMoneda, cambiarIdMoneda] = useState(0);
  const [gastos, setGasto] = useState([]);
  const [ingresos, setIngres] = useState([]);

  
  //variables
  let rubr = {};
  const inputRubro = useRef();
  const inputConcepto = useRef();
  const inputTipoOperacion = useRef();
  const inputValorActualMoneda = useRef();

  //funciones
  const changeRubro = () => {
      cambiarIdMoneda(inputRubro.current.value);
      rubro = rubros.filter(rubro => rubro.id == inputRubro.current.value);
      const cotizacion = document.getElementById("valorMoneda");
      
      if(rubro[0]){
          cotizacion.value = rubro[0].cotizacion;
      }else{
          cotizacion.value = 0;
      }
  }
    useEffect(() => {
    
      rubros()
          .then(data => { 
            if(data.tipo == "gasto"){
              dispatch(setGasto(data.gastos))
            }else{
              dispatch(setIngres(data.ingresos))

            }
              
          })
        .catch(showAlert(true))
    },[])
  const _crearTransaccion = async () => {
      const tipoOperacion = inputTipoOperacion.current.value;
      const idMoneda = inputIdMoneda.current.value;
      const cantidadMoneda = inputConcepto.current.value;
      const inputMedio = inputMedio.current.value;

      if(tipoOperacion != 1 && tipoOperacion != 2){
          alert("Debe seleccionar un tipo de operación");
          return;
      } 
      
      if(idMoneda <= 0){
          alert("Debe seleccionar una moneda válida");
          return;
      }
      
      if(cantidadMoneda <= 0){
          alert("La cantidad no puede ser igual o menor que 0");
          return;
      }
      
      const datos = {
          idUsuario: userLogged.id,
          tipoOperacion: tipoOperacion,
          moneda: idMoneda,
          cantidad: cantidadMoneda,
          valorActual: valorActualMoneda
      }

      let data = await FetchApiWithApiKeyAndBody(urlCrearTransaccion, "POST", userLogged.apiKey, datos);

      //idTransaccion: 4772, mensaje: 'Transacción ingresada con éxito', codigo: 200
      if(data.codigo === 200){
          const estructuraNuevaTransaccion = {
              cantidad: cantidadMoneda,
              id: data.idTransaccion,
              tipo_operacion: tipoOperacion,
              usuarios_id: userLogged.id,
              moneda: idMoneda,
              valor_actual: valorActualMoneda
          }
          dispatch(nuevaTransaccion(estructuraNuevaTransaccion));
          alert(data.mensaje);
      }else{
          alert("Ha ocurrido un error en la petición");
      }
  }
  
  return (
    <form className=''>
      <h4 className="container mt-4 mb-4 mx-auto text-center">Agregar Gasto / Ingreso</h4>
      <div className="form-outline mb-4">
         <select className="form-select" ref={ inputTipoOperacion } >
            <option defaultValue>Seleccione tipo de operación</option>
            <option value="gasto">Gasto</option>
            <option value="ingreso">Ingreso</option>
          </select>
      <div className="form-outline mb-4">
      <select className="form-control" id="exampleFormControlSelect1" onChange= { changeRubro }>
        {gastos ? (gastos.map(({ id, nombre }) => (
          <option value={id }>{nombre}</option>)))
          : (ingresos.map(({ id, nombre }) => (
            <option value={id }>{nombre}</option>)))
          }
      </select>
      </div>
      <div className="form-outline mb-4">
          <label className="form-label" htmlFor="cantidadUnidades">Concepto del gasto:</label>
          <input type="text" id="conceptoGasto" className="form-control" ref={ inputConcepto } />
      </div>
          <select className="form-select" ref={ inputMedio } >
            <option defaultValue>Seleccione el medio</option>
            
              <option value="1">Efectivo</option>
              <option value="4">Banco</option>
              : 
              <option value="1">Efectivo</option>
              <option value="2">Debito</option>
              <option value="3">Credito</option>
            
            
           
          </select>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="cantidadUnidades">Total:</label>
            <input type="number" id="total" className="form-control" ref={ inputCantidadMoneda } />
          </div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <div className="form-outline d-grid">
              <button className="btn btn-primary" type="button" onClick={ _crearTransaccion } >Crear Registro</button>
          </div>
      </div>
    </form>
  )
}
export default AgregarGasto