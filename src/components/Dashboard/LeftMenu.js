import React from 'react'

export default function LeftMenu() {
  return (
    <nav id="sidebar">
            <div className="sidebar-header">
                <a href='/'><h3>XFinca</h3></a>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a href="/expenses">Gastos</a>
                </li>
                <li>
                    <a href="/charges">Cobros</a>
                </li>
                <li>
                    <a href="/messages">Mensajes</a>
                </li>
                <li>
                    <a href="/account">Mi Cuenta</a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <a href="/" className="download">Inicio</a>
                </li>
                
                {/* <br></br> */}
                {/* <li>
                    <a href="/contact" className="article">Contacto</a>
                </li> */}
            </ul>
        </nav>
  )
}