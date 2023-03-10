import '../../services/Api/Api'
import { Registro } from '../../services/Api/Api'
import { departamento } from '../../services/Api/Api';
import { ciudad } from '../../services/Api/Api';
import {  useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRegisterUser } from '../../app/slices/userSlice';


const Registrarse = () => {

    const [userName, cambiarUserName] = useState("");
    const [password, cambiarPassword] = useState("");
    const [departamentos, setDeparamentos] = useState([]);
    const [depa, cambiarDepartamento] = useState(0);
    const [ciudades, cambiarCiudades] = useState([]);
    const [laCiudad, cambiarCiudad] = useState(0);
    const [alerta, setAlerta] = useState(false)
    const [error, setError] = useState("")



    const dispatch = useDispatch();
    
    useEffect(() => {
        departamento()
            .then(data => {
                dispatch(setDeparamentos(data.departamentos))
            })
          .catch(showAlert(true))
      },[])

      useEffect(() => {
        ciudad(depa) 
         .then(data => {
            dispatch(cambiarCiudades(data.ciudades))
        })
      .catch(showAlert(true))
  }, [depa])

    const changeDepartamento = ({ target }) => {
        cambiarDepartamento(target.value);
    }

    const changeCiudad = ({ target }) => {
        cambiarCiudad(target.value);
    }
    
    const changeUserName = ({ target }) => {
        console.log(target.value)
        cambiarUserName(target.value);
    }

    const changePassword = ({ target }) => {
        cambiarPassword(target.value);
    }
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
      
    const submitRegister = async (e) => {
        e.preventDefault();
        let regex = /[A-Za-z0-9]/;

        if(!userName || !password || !depa || depa <= 0 || !laCiudad || laCiudad <= 0 ){
            console.log(`Datos: `,{userName}, {password}, {depa}, {laCiudad})

            showError("Por favor, complete los datos del formulario correctamente")
            return;
        }

        if(!regex.test(userName)){
            showError("Caracteres no permitidos")
            return;
        }

        if(password.length < 8){
            showError("La contrase??a debe tener un m??nimo de 8 caracteres.")
            return;
        }
        
        const datos = {
            usuario: userName,
            pass: password,
            idDepartamento: depa,
            idCiudad: laCiudad
        };

        try{
            const data = Registro(datos.usuario, datos.pass, datos.idDepartamento, datos.idCiudad);
            const user = { apiKey: data.apiKey, id: data.id }
            dispatch(setRegisterUser(user));
            navigator("/dashboard");
        }catch({ message }){
            showError(message)
        }
    }

    return (
       
        <>
        <h1 className="container col-3 mt-4 mb-4 mx-auto text-center">Register</h1>
        <form className="container col-3">
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="userNameRegister" >Usuario</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="usuario"onChange= { changeUserName }></input>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="passwordRegister" >Password</label>
                <input type="password" className="form-control" id="idPassword" placeholder="Password" onChange= { changePassword }></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Deparamento</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange= { changeDepartamento }>

                    {departamentos.map(({ id, nombre }) => (
            <option value={id }>{nombre}</option>))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Ciudad</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange= { changeCiudad }>

                    {ciudades.map(({ id, nombre }) => (
            <option value={id }>{nombre}</option>))}
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="button" onClick={ submitRegister }>Registrarme</button>
            </div>

          
          
            
          
          {alerta ? (
            <div className='alert alert-secondary' role='alert'>
              Cargando..
            </div>
          ) : (
            ''
          )}


            {error ? (
            <div className='alert alert-danger' role='alert'>
              {error}
            </div>
          ) : (
            ''
          )}
        </form>
        </>


    );
};

export default Registrarse