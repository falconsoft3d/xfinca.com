import React, { useEffect, useState } from 'react';
import BtnLogout from '../components/BtnLogout';
import LeftMenu from '../components/Dashboard/LeftMenu';
import "./DashboardLayout.css";
import { useSelector } from 'react-redux';
import {onSnapshot, doc } from 'firebase/firestore';
import {db} from "../firebase/firebaseConfig";

export default function DashboardLayout(props) {
  const {children} = props;
  const [building, setBuilding] = useState("-")
  const { id } = useSelector(state => state.building);


  useEffect(() => {
       const docRef = doc(db, 'buildings', id)
       
       onSnapshot(docRef, (doc) => {
            // console.log(doc.data(), doc.id)
            setBuilding(doc.data().name)
       });
    },[id]);

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
                                <a className="btn btn-success mx-2" href="/">{building}</a>
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
