import { useRef, useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovimiento } from '../../../app/slices/movimientosSlice'
import { agregarMovimiento , rubros} from '../../../services/Api/Api'
import {setFilteredRubros, setRubros} from '../../../app/slices/rubrosSlice'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AgregarGasto = () => {
  //Redux States
 // const rubross = useSelector((state) => state.rubros.data);
 const user = useSelector(state => state.user.loggedUser)
 const todosLosRubros = useSelector((state) => state.rubrosSlice.rubros);
 console.log(`useSelector ${todosLosRubros}`)


  const dispatch = useDispatch();

  //states

  const [rubroFiltrado, setRubrosFil] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  
  //variables
  const inputConcepto = useRef();

  const inputTipo = useRef();
  const inputMedio = useRef();
  const inputRubro = useRef();


  const inputTotal = useRef();

  //funciones
  const changeTipo = () => {
    const valorRubro = (inputTipo.current.value)
    console.log(`valor rubro ${valorRubro}`)
      const filtradosI = todosLosRubros.filter(todos => todos.tipo == valorRubro)
      dispatch(setFilteredRubros(filtradosI))
      dispatch(setRubrosFil(filtradosI))




      
  }

  useEffect(() => {
    rubros(user.apiKey)
      .then(data => {
        console.log(`lo que recibo ${data.rubros}`)
        dispatch(setRubros(data.rubros))
        dispatch(setFilteredRubros(data.rubros))
      })
      .catch(e => console.error('Ha ocurrido un error no llego a rubro'))
  }, [rubroFiltrado])
    
  
  const changeRubro=() =>{

  }
  
  
    const _crearTransaccion = async () => {
      const tipoOperacion = inputTipo.current.value;
      const inputMedio = inputMedio.current.value;

      if(tipoOperacion != 1 && tipoOperacion != 2){
          alert("Debe seleccionar un tipo de operación");
          return;
      } 
      
      
      
      
      
      const datos = {
          idUsuario: user.id,
          tipoOperacion: tipoOperacion,
      }

      let data = await agregarMovimiento(datos, user.apiKey);

      //idTransaccion: 4772, mensaje: 'Transacción ingresada con éxito', codigo: 200
      if(data.codigo === 200){
          const estructuraNuevaTransaccion = {
              id: data.idTransaccion,
              tipo_operacion: tipoOperacion,
              usuarios_id: user.id,
          }
          dispatch(agregarMovimiento(estructuraNuevaTransaccion));
          alert(data.mensaje);
      }else{
          alert("Ha ocurrido un error en la petición");
      }
  }
  
  return (
    <form >

  <div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Agregar Gasto</h5>
      <label  htmlFor="cantidadUnidades">Tipo de operacion</label>
      <select className="form-control " onChange={changeTipo} ref ={inputTipo}>
    
        <option defaultValue>Tipo de operacion</option>
        <option value={`ingreso`}>Ingreso</option>
        <option value={`gasto`}>Gasto</option>

      </select>

          <select className="form-control " id="exampleFormControlSelect1"ref={ inputRubro }  onChange= { changeRubro }>
          {rubroFiltrado.map(({ id, nombre }) => (
            <option value={id }>{nombre}</option>))}
         
      </select>
      <label  htmlFor="cantidadUnidades">Concepto del gasto:</label>
      <input type="text" id="conceptoGasto" className="form-control" ref={ inputConcepto } />
      <select className="form-control" ref={ inputMedio } >
            <option defaultValue>Seleccione el medio</option>

              
              <option value="1">Efectivo</option>
              <option value="2">Debito</option>
              <option value="3">Credito</option>
           
          </select>
          <label className="form-label" htmlFor="cantidadUnidades">Total:</label>
            <input type="number" id="total" className="form-control" ref={ inputTotal } />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <button className="btn btn-primary my-2 my-sm-3" type="button" onClick={ _crearTransaccion } >Crear Registro</button>




    </div>
  </div>
  
</div>




    </form>






  )
}
export default AgregarGasto