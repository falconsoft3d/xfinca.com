import React, {useState} from 'react';
import FooterLogin from '../components/FooterLogin';
import HomeLayout from '../layout/HomeLayout';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './../firebase/firebaseConfig';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
		e.preventDefault();
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		if( !expresionRegular.test(email) ){
      toast("Por ingresa un correo electrónico valido");
			return;
		}
		if(email === '' || password === ''){
      toast("Por favor rellena todos los datos")
			return;
		}
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/');
		} catch(error) {
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
      toast(mensaje);
		}
	}

  return (
    <HomeLayout>
    <div className="text-center col-md-6 mx-auto">
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com"
            value={email}
					  onChange={(e) => setEmail(e.target.value)}
            required/>
          <label>Direección de Correo</label>
        </div>
        <br></br>
        <div className="form-floating">
          <input type="password" 
                  className="form-control" 
                  id="floatingPassword" 
                  placeholder="Password"
                  value={password}
					        onChange={(e) => setPassword(e.target.value)}
                  required/>
          <label>Contraseña</label>
        </div>
        <br></br>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
        <div className='mt-4'>
          <a href="/register">Quieres registrarte ?</a>
        </div>
        <FooterLogin/>
      </form>
    </main>
      </div>
      </HomeLayout>
  )
}
