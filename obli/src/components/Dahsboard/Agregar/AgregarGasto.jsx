import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovimiento } from '../../../app/slices/movimientosSlice'
import { agregarMovimiento, rubros } from '../../../services/Api/Api'
import { setFilteredRubros, setRubros } from '../../../app/slices/rubrosSlice'
import { setFilteredMedios, setMedios } from '../../../app/slices/mediosSlice'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AgregarGasto = () => {
  //Redux States
  const user = useSelector(state => state.user.loggedUser)
  const todosLosRubros = useSelector((state) => state.rubrosSlice.rubros);
  const todosLosMedios = useSelector((state) => state.mediosSlice.medios);
  console.log(`todos los medios ${todosLosMedios}`)



  const dispatch = useDispatch();

  //states

  const [rubroFiltrado, setRubrosFil] = useState([]);
  const [medioFiltrado, setMedioFil] = useState([]);
  const [startDate, setStartDate] = useState(new Date());


  //variables
  const inputConcepto = useRef();

  const inputTipo = useRef();
  const inputMedio = useRef();
  const inputRubro = useRef();
  const inputDate = useRef();
  const inputTotal = useRef();


  //funciones
  const changeTipo = () => {
    const valorRubro = (inputTipo.current.value)
    console.log(`valor rubro ${valorRubro}`)
    const filtradosR = todosLosRubros.filter(todosR => todosR.tipo == valorRubro)
    const filtradosM = todosLosMedios.filter(todosM => todosM.tipo == valorRubro)
    console.log(`todos los medios ${filtradosM}`)
    dispatch(setRubrosFil(filtradosR))
    dispatch(setFilteredRubros(filtradosR))
    dispatch(setMedioFil(filtradosM))
    dispatch(setFilteredMedios(filtradosM))
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




  const crearMovimiento = async () => {
    const rubro = inputRubro.current.value;
    const medio = inputMedio.current.value;
    const concepto = inputConcepto.current.value;
    const fecha = inputDate.current.value;
    const total = inputTotal.current.value;


    if (total <= 0) {
      alert("Debe ingresar un valor mayor a 0");
      return;
    }
    if (medio == null) {
      alert("Debe elegir un medio");
      return;
    }
    if (concepto == null) {
      alert("Debe ingresar un concepto");
      return;
    }
    if (concepto == null) {
      alert("Debe seleccionar una fecha");
      return;
    }

    const datos = {
      idUsuario: user.id,
      concepto: concepto,
      categoria: rubro,
      total: total,
      medio: medio,
      fecha: fecha

    }
    agregarMovimiento(datos, user.apiKey, user.idUsuario)
      .then(data => {
        dispatch(addMovimiento(data.movimiento));
        alert(data.mensaje);
        console.log(`movimiento ${data.movimiento}`)
      }).catch(e => console.error("Ha ocurrido un error en la petición"))



  }

  return (
    <form >
    

              <div class="card-group">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Agregar Gasto</h5>
                    <label htmlFor="cantidadUnidades">Tipo de operacion</label>
                    <select className="form-control my-2 my-sm-3 " onChange={changeTipo} ref={inputTipo}>

                      <option defaultValue>Tipo de operacion</option>
                      <option value="ingreso">Ingreso</option>
                      <option value="gasto">Gasto</option>

                    </select>

                    <select className="form-control " id="exampleFormControlSelect1" ref={inputRubro} >
                      {rubroFiltrado.map(({ id, nombre }) => (
                        <option value={id}>{nombre}</option>))}

                    </select>
                    <label htmlFor="cantidadUnidades">Concepto del gasto:</label>
                    <input type="text" id="conceptoGasto" className="form-control" ref={inputConcepto} />
                 
                    <label htmlFor="cantidadUnidades">Medio</label>
                    <select className="form-control" ref={inputMedio} >
                      <option value={"Efectivo"}>Efectivo</option></select>
                    <label className="form-label my-2   " htmlFor="cantidadUnidades">Total:</label>
                    <input type="number" id="total" className="form-control my-2 my-sm-3" ref={inputTotal} />
                    <DatePicker ref={inputDate} selected={startDate} onChange={(date) => setStartDate(date)} />
                    <button className="btn btn-primary my-2 my-sm-3" type="button" onClick={crearMovimiento} >Crear Registro</button>

                  </div>
                </div>

              </div>
       
    </form>
  )
}

export default AgregarGasto