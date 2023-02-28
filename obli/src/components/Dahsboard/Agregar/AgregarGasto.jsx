import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovimiento } from '../../../app/slices/movimientosSlice'
import { agregarMovimiento, rubros } from '../../../services/Api/Api'
import { setFilteredRubros, setRubros } from '../../../app/slices/rubrosSlice'
import { useNavigate } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";


const AgregarGasto = () => {
  //Redux States
  const user = useSelector(state => state.user.loggedUser)

  const todosLosRubros = useSelector((state) => state.rubrosSlice.rubros);

  const dispatch = useDispatch();
  const navigator = useNavigate()


  //states

  const [rubroFiltrado, setRubrosFil] = useState([]);
  const [medioFiltrado, setMedioFil] = useState([]);
  const [error, setError] = useState("") //Agregar
  const [alerta, setAlerta] = useState(false) //Agregar




  //variables
  const inputConcepto = useRef();

  const inputTipo = useRef();
  const inputMedio = useRef();
  const inputRubro = useRef();
  const inputDate = useRef();
  const inputTotal = useRef();


  //funciones

  const showAlert = () => {
    setAlerta(true)
    setTimeout(() => {
        setAlerta(false)
    }, 1000)
}
  const showError = (msg) => {
    setError(msg)
    setTimeout(() => {
        setError("")
    }, 2000)
}

  const changeTipo = () => {
    const valorRubro = (inputTipo.current.value)
    //console.log(`valor rubro ${valorRubro}`)
    if (valorRubro == "ingreso") {
      const mediosI = [
        {
          nombre: 'Efectivo',
          tipo: 'gasto'
        },
        {
          nombre: 'Banco',
          tipo: 'gasto'
        },]
      setMedioFil(mediosI);
      const filtradosR = todosLosRubros.filter(todosR => todosR.tipo == valorRubro);
      setRubrosFil(filtradosR);
      dispatch(setFilteredRubros(filtradosR));
    }
    if (valorRubro == "gasto") {
      const mediosR = [
        {
          nombre: 'Efectivo',
          tipo: 'gasto'
        },
        {
          nombre: 'Débito',
          tipo: 'gasto'
        },
        {
          nombre: 'Crédito',
          tipo: 'gasto'
        },]
      setMedioFil(mediosI);
      const filtradosR = todosLosRubros.filter(todosR => todosR.tipo == valorRubro);
      setRubrosFil(filtradosR);
      dispatch(setFilteredRubros(filtradosR))
    }
   
  }

  useEffect(() => {
    rubros(user.apiKey)
      .then(data => {
        //console.log(`lo que recibo ${data.rubros}`)
        dispatch(setRubros(data.rubros))
        dispatch(setFilteredRubros(data.rubros))
      })
      .catch(e => console.error('Ha ocurrido un error: ' + e))
  }, [rubroFiltrado])

  const crearMovimiento = async () => {
    const rubro = inputRubro.current.value;
    const medio = inputMedio.current.value;
    const concepto = inputConcepto.current.value;
    const fecha = inputDate.current.value;
    const total = inputTotal.current.value;


    if (total <= 0) {
      showError("Debe ingresar un valor mayor a 0");
      return;
    }
    if (medio = "sinValor") {
      showError("Debe elegir un medio");
      return;
    }
    if (concepto === "") {
      showError("Debe ingresar un concepto");
      return;
    }
    if (total === null) {
      showError("Debe ingresar un total");
      return;
    }
    if (fecha === null) {
      showError("Debe seleccionar una fecha");
      return;
    }

    const datos = {
      
      concepto: concepto,
      categoria: rubro,
      total: total,
      medio: medio,
      fecha: fecha,
      id: null,

    }
    agregarMovimiento(datos, user.apiKey, user.id)
      .then(data => {
        datos.id = data.idMovimiento
        console.log(`Data ${ datos.id}`)
        dispatch(addMovimiento(datos));
        alert(data.mensaje);
      }).catch(e => console.error("Ha ocurrido un error en la petición: " + e))
    inputRubro.current.value = "";
    inputMedio.current.value = "";
    inputConcepto.current.value = "";
    inputTotal.current.value = "";
    inputDate.current.value = "";


  }

  return (
    <form >

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Agregar Movimiento</h5>

            <select className="form-control my-2 my-sm-3 " onChange={changeTipo} ref={inputTipo}>
              <option defaultValue>Tipo de operacion</option>
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>

            <select className="form-control " id="exampleFormControlSelect1" ref={inputRubro}>
              {rubroFiltrado.map(({ id, nombre }) => (
                <option key={id} value={id}>{nombre}</option>))}
              <option defaultValue>Seleccione el rubro</option>
            </select>

            <input type="text" id="conceptoGasto" placeholder='Concepto' className="form-control my-2 my-sm-3" ref={inputConcepto} />

            <select className="form-control" ref={inputMedio} >
              <option value="sinValor">Seleccione el medio</option>
              {medioFiltrado.map(({ nombre }) => (
                <option key={nombre} value={nombre}>{nombre}</option>))}
            </select>

            <label className="form-label my-2   " htmlFor="cantidadUnidades">Total:</label>
            <input type="number" id="total" className="form-control my-2 my-sm-3" ref={inputTotal} />

            <input type="date" className="form-control" ref={inputDate}/><br />
            <button className="btn btn-primary my-2 my-sm-3" type="button" onClick={crearMovimiento} >Crear Registro</button>
            {error ? (
                    <div className='alert alert-danger' role='alert'>
                        {error}
                    </div>
                ) : (
                    ''
                )}
          </div>
        </div>

      </div>
    </form>
  )
}

export default AgregarGasto