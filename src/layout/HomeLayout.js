import React from 'react'
import HomeHeader from '../components/Home/HomeHeader';

export default function HomeLayout(props) {
    const {children} = props;
  return (
    <>
        
        <div className="container py-3">
        <HomeHeader />
    
      <main>
         {children}
      </main>
    
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2022</small>
          </div>
          <div className="col-6 col-md">
          <h5>Autor</h5>
          <small className="d-block mb-3 text-muted">Marlon Falcón, mfalconsoft@gmail.com</small>
          
          </div>
          <div className="col-6 col-md">
            
          </div>
          <div className="col-6 col-md">
            <h5>Menu</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Registrarse</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Iniciar Sesion</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    
    </>
  )
}
