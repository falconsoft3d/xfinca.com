import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {useAuth} from './../../../contexts/AuthContext';

export default function ExpensesForm() {
  // let defaultDate = new Date()
  /// defaultDate.setDate(defaultDate.getDate() + 0)

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const { id } = useSelector(state => state.building);
  const { user } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name : name,
      amount: amount,
      building_id : id,
      user_id : user.uid,
      date: date
  }
    try {
        const docRef = await addDoc(collection(db, "expenses"), data);
        toast("Se ha agregado un gasto.")
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    setName("");
    setAmount("");
}

  return (
    <form action="" onSubmit={onSubmit}>
            <div className="card border-primary mb-3">
                    <div className="card-header">Agregar / Editar</div>
                    <div className="card-body">
                        <div className="form-group">
                          <label className="form-label mt-4">Nombre del gasto</label>
                          <input type="text" className="form-control"
                                 name="name"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)} required
                                 id="exampleInputPassword1" placeholder="Reparación" />
                        </div>

                        <div className="form-group">
                          <label  className="form-label mt-4">Monto (EUR)</label>
                          <input type="number" className="form-control" 
                                  id="exampleInputPassword1"
                                  name="amount"
                                  value={amount} required
                                  onChange={(e) => setAmount(e.target.value)}
                                  placeholder="100" />
                        </div>

                        <div className="form-group">
                          <label  className="form-label mt-4">Fecha</label>
                          <input type="date" className="form-control" 
                                  id="exampleInputPassword1"
                                  name="date"
                                  value={date} required
                                  onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-4">Agregar</button>
            </div>
        </form>
  )
}
