import React, {useState} from 'react'
import FooterLogin from '../components/FooterLogin';
import HomeLayout from '../layout/HomeLayout';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import {auth} from './../firebase/firebaseConfig';
import {useNavigate} from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e) => {
		e.preventDefault();
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		if( !expresionRegular.test(email) ){
      toast("Por ingresa un correo electrónico valido");
			return;
		}
		if(email === '' || password === '' || password2 === ''){
      toast("Por favor rellena todos los datos")
			return;
		}


		if(password !== password2){
			toast("Las contraseñas no son iguales");
			return;
		}
		try {
			await createUserWithEmailAndPassword(auth, email, password);
      toast("La cuenta se creo correctamente");
			navigate('/');
		} catch(error) {
			let mensaje;
			switch(error.code){
				case 'auth/invalid-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
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
                 id="email" 
                 value={email}
					       onChange={(e) => setEmail(e.target.value)}
                 required
                 placeholder="Tu correo"/>
          <label>Dirección de correo</label>
        </div>

        
        <br></br>
        <div className="form-floating">
          <input type="password" 
                 className="form-control" 
                 id="password" 
                 placeholder="Password"
                 value={password}
					       onChange={(e) => setPassword(e.target.value)}
                 required
                 />
          <label>Contraseña</label>
        </div>

        <br></br>
        <div className="form-floating">
          <input type="password" 
                 className="form-control" 
                 id="password2" 
                 placeholder="Password"
                 value={password2}
					       onChange={(e) => setPassword2(e.target.value)}
                 required
                 />
          <label>Repita la Contraseña</label>
        </div>
        <br></br>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Registarse</button>
        <div className='mt-4'>
          <a href="/login">Tienes cuenta ?</a>
        </div>
        <FooterLogin/>
      </form>
    </main>
      </div>
      </HomeLayout>
  )
}