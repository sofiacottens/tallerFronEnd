import '../../services/Api/Api'
import { Registro } from '../../services/Api/Api'
import { departamento } from '../../services/Api/Api';
import { ciudad } from '../../services/Api/Api';
import { useRef, useState } from 'react'



const Registrarse = () => {

    const selectRef = useRef()

    const onSelectChange = () => {
        const idDepartamento = Number(selectRef.current.value.id)
        onSelectCiudad(idDepartamento)
    }
    const onSelectCiudad = (idDepartamento) => {
        ciudad(idDepartamento); 
    }
    



  return (
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Usuario</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="usuario"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="password" class="form-control" id="idPassword" placeholder="Password"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Deparamento</label>
    <select class="form-control" id="exampleFormControlSelect1"
    onChange={onSelectChange}
    ref={selectRef}
    value={departamento}>
        
      <option value={departamento}></option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Ciudad</label>
    <select multiple class="form-control" id="exampleFormControlSelect2"
    onChange={onSelectCiudad}>
      <option value={ciudad}></option>
    </select>
  </div>
  <div class="form-group">
  <button type="submit" class="btn btn-primary">Registrarme</button>
  </div>
</form>
 
    
  )
};

export default Registrarse