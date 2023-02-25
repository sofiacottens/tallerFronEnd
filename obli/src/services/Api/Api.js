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

export { Registro , login, departamento, ciudad, deleteMovimiento};