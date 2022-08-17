import React from 'react';
import BtnLogout from '../components/BtnLogout';
import LeftMenu from '../components/Dashboard/LeftMenu';
import "./DashboardLayout.css";
import { useSelector } from 'react-redux';

export default function DashboardLayout(props) {
  const {children} = props;
  const { id } = useSelector(state => state.building);

  return (
    <>

<div className="wrapper">
        {/* <!-- Sidebar Holder --> */}
        <LeftMenu />
        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse px-4 " id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="btn btn-success mx-2" href="/">{id}</a>
                             </li>
                            <li className="nav-item">
                               <BtnLogout />
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
