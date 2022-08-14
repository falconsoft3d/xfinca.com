import React, {useState, useEffect} from 'react';
import { db } from "./../../firebase/firebaseConfig";
import {collection, onSnapshot} from 'firebase/firestore';

export default function HomeList() {
  const [buildings, setBuildings] = useState([])

  useEffect(() => {
    onSnapshot(
        collection(db, 'buildings'),
        (snapshot) => {
            const buildingsArray = snapshot.docs.map((item) => {
                return {...item.data(), id: item.id}
            })
            setBuildings(buildingsArray);
        },
        (error) => {
            console.log(error);
        }
    );
}, []);

  return (
    buildings.length > 0 &&
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {buildings.map((item) => (
          <div className="col" key={item.id}>
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{item.name}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">{item.letter}</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{item.street} {item.number}</li>
                  <li>{item.city}</li>
                </ul>
                <a type="button" href="/login" className="w-100 btn btn-lg btn-outline-primary">Entrar</a>
              </div>
            </div>
          </div>
        ))}    
    </div>
  )
}
