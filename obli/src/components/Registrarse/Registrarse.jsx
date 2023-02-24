import '../../services/Api/Api'
import { Registro } from '../../services/Api/Api'
import { departamento } from '../../services/Api/Api';
import { ciudad } from '../../services/Api/Api';
import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Registrarse = () => {

    const selectRef = useRef();
    const [departamentos, setDeparamentos] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        departamento()
            .then(data => {
                dispatch(setDeparamentos(data.departamentos))
            })
          .catch(e => console.error('Ha ocurrido un error'))
      }, [])

    const onSelectChange = () => {
        const idDepartamento = Number(selectRef.current.value.id)
        onSelectCiudad(idDepartamento)
    }
    const onSelectCiudad = (idDepartamento) => {
        ciudad(idDepartamento);
    }


    return (
       
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Usuario</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="usuario"></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input type="password" className="form-control" id="idPassword" placeholder="Password"></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Deparamento</label>
                <select className="form-control" id="exampleFormControlSelect1">

                    {departamentos.map(({ idDepartamento, nombre }) => (
            <option>
              id={idDepartamento}
              nombre={nombre}
            
              </option>
            
          ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Ciudad</label>
                <select multiple className="form-control" id="exampleFormControlSelect2"
                    onChange={onSelectCiudad}>
                    <option ></option>
                </select>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Registrarme</button>
            </div>
        </form>


    );
};

export default Registrarse