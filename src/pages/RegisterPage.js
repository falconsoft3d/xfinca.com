import React from 'react'
import FooterLogin from '../components/FooterLogin';
import HomeLayout from '../layout/HomeLayout';

export default function RegisterPage() {
  return (
    <HomeLayout>
    <div className="text-center col-md-6 mx-auto">
    <main className="form-signin w-100 m-auto">
      <form >
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label>Direección de Correo</label>
        </div>

        
        <br></br>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label>Contraseña</label>
        </div>

        <br></br>
        <div className="form-floating">
          <input type="passwordr" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label>Repita la Contraseña</label>
        </div>

        <br></br>
        <div className="form-floating">
                    <select className="form-select" id="exampleSelect1">
                      <option>Seleccione la Finca</option>  
                      <option>Valencia 46</option>
                      <option>Quart 7</option>
                </select>
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