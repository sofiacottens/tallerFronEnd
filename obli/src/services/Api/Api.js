const BASE_URL = 'https://dwallet.develotion.com';

const login = async (username, pass) => {
  const response = await fetch(`${BASE_URL}/login.php`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      usuario: username,
      password: pass,
    }),
  });

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      status: response.status,
      message: 'Ha ocurrido un error',
    });
  }
};

const Registro = async (username, pass, departamento, ciudad) => {
  const response = await fetch(`${BASE_URL}/usuarios.php`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      usuario: username,
      password: pass,
      idDepartamento: departamento,
      idCiudad: ciudad
    }),
  });

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      status: response.status,
      message: 'Ha ocurrido un error',
    });
  }
};

const departamento = async () => {
  const response = await fetch(`${BASE_URL}/departamentos.php`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    
  });

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      status: response.status,
      message: 'Ha ocurrido un error',
    });
  }
};

const deleteMovimiento = async(idMovimiento) => {
  const response = await fetch(`${BASE_URL}/movimientos.php?idMovimiento=${idMovimiento}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'apikey' : 'e7d52278a3927bdd5923d825320a1cad',
    },
    body: {
      "idMovimiento": idMovimiento
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      status: response.status,
      message: 'Ha ocurrido un error',
    });
  }
}

const getMovimientos = async (idUsuario, auth) => {
  console.log(auth)
  console.log(idUsuario)
  //token user dwallet 3 a2e05e04d264fb88978860a999fe0716
  const response = await fetch(`${BASE_URL}/movimientos.php?idUsuario=${idUsuario}`,{
    method: 'GET',
     headers : {
      'Content-type': 'application/json',
      'apikey': auth,
     },
     params:{
      'idUsuario': idUsuario,
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject(
      {
        status: response.status,
        message: ('Ha ocurrido un error: ' + response.status),
      }
    );
  }


}

const ciudad = async (idDepartamento) => {
  const response = await fetch(`${BASE_URL}/ciudades.php?idDepartamento=${idDepartamento}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    
  });

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      status: response.status,
      message: 'Ha ocurrido un error',
    });
  }
};

const agregarMovimiento = async (data, auth, idUsuario) => { 
  const response = await fetch(`${BASE_URL}/movimientos.php`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': auth,

    },
    body: JSON.stringify({
      idUsuario: idUsuario,
      concepto: data.concepto,
      categoria: data.categoria,
      total: data.total,
      medio: data.medio,
      fecha: data.fecha
    }),

  });

  if (response.status === 200) {
    console.log(`Agrego OK ${data.concepto}`)
    return response.json();
  } else {
    return Promise.reject({
      status: response.status,
      message: 'Ha ocurrido un error',
    });
  }
};

const rubros = async (auth) => { 
  const response = await fetch(`${BASE_URL}/rubros.php`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'apikey': auth,
    },
    
  });

  if (response.status === 200) {
    console.log(`llegas pero no, ${auth}`)
    
    return response.json()
  } else {
    return Promise.reject({
      status: response.status,
      message: `error ${auth}`,
    });
  }
};

export { Registro , login, departamento, ciudad, deleteMovimiento, agregarMovimiento, rubros, getMovimientos};