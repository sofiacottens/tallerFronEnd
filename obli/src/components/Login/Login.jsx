import React, { useState } from 'react';
import './Login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  } 

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can add the logic to handle the form submission,
    // for example by making an API request to check the user's credentials.
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
  <section className="vh-100 gradient-custom">
      <form onSubmit={handleSubmit}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Ingrese su usuario y contraseña</p>

                    <div className="form-outline form-white mb-4">
                      <input type="email" value={email} onChange={handleEmailChange} className="form-control form-control-lg" />
                      <label className="form-label" id="typeEmailX">Usuario</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                      <label type="password" value={password} onChange={handlePasswordChange}>Contraseña</label>
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>

                  </div>

                  <div>
                    <p className="mb-0">No tienes cuenta? <a href="#!" className="text-white-50 fw-bold">Registrarse</a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>  
    </section>
  );
}

export default LoginForm;