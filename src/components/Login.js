import React, {useEffect, useState} from "react";
import './../backend/css/sb-admin-2.min.css';
import {auth} from './../firebase/firebaseConfig';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


  useEffect(() => {
    document.body.classList.add('bg-gradient-primary');
  }, []);


  const handleSubmit = async (e) => {
		e.preventDefault();

    try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/dashboard');
		} catch(error) {
			console.log(error)
			// cambiarEstadoAlerta(true);
			let mensaje;
			switch(error.code){
				case 'auth/wrong-password':
					mensaje = 'La contraseña no es correcta.'
					break;
				case 'auth/user-not-found':
					mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
					break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
			}

			// cambiarAlerta({tipo: 'error', mensaje: mensaje});
		}

  }

  const handleChange = (e) => {
		if(e.target.name === 'email'){
			setEmail(e.target.value);
		} else if (e.target.name === 'password'){
			setPassword(e.target.value);
		}
	}

  return (
        <>
          <div class="container">

<div class="row justify-content-center">

  <div class="col-xl-10 col-lg-12 col-md-9">

    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        
        <div class="row">
          <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
          <div class="col-lg-6">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">XFinca</h1>
              </div>
              <form class="user" onSubmit={handleSubmit}>
                <div class="form-group">
                      <input  type="email" 
                              class="form-control form-control-user" 
                              id="email" 
                              aria-describedby="emailHelp" 
                              placeholder="Correo Electrónico"
                              name="email"
                              value={email}
					                    onChange={handleChange}
                              />
                </div>
                <div class="form-group">
                      <input  type="password" class="form-control form-control-user" 
                              id="password"
                              placeholder="Password"
                              name="password"
                              value={password}
					                    onChange={handleChange}
                  />
                </div>

                <button class="btn btn-primary btn-user btn-block" type="submit">Iniciar Sesión</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

</div>
        </>
     );
}
 
export default Login;