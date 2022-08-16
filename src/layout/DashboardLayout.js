import React from 'react';
import LeftMenu from '../components/Dashboard/LeftMenu';
import "./DashboardLayout.css";

export default function DashboardLayout(props) {
  const {children} = props;
  return (
    <>

<div className="wrapper">
        {/* <!-- Sidebar Holder --> */}
        <LeftMenu />

        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cerrar Sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    </div> 
    </>
  )
}
