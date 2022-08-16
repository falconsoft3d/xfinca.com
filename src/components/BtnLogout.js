import React from 'react';

import {auth} from './../firebase/firebaseConfig';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useAuth} from './../contexts/AuthContext';


export default function BtnLogout() {
    const navigate = useNavigate();
    const {user} = useAuth();

    const logout = async() => {
		try {
			await signOut(auth);
			navigate('/login');
		} catch(error){
			console.log(error);
		}
	}
  return (
    <button className="btn btn-primary article" onClick={logout}>Cerrar Sesión</button>
  )
}
