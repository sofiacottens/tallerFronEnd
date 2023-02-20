const BASE_URL = 'https://dwallet.develotion.com/';

const registro = async (username, pass) => {
  const response = await fetch(`${BASE_URL}/usuarios.php`, {
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

export { registro };