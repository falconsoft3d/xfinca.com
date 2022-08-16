import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import { toast } from 'react-toastify';

export default function ExpensesForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "expenses"), {
            name : name,
            amount: amount
        });
        toast("Se ha agregado un gasto.")
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    setName("");
    setAmount("");
}

  return (
    <form action="" onSubmit={onSubmit}>
            <div class="card border-primary mb-3">
                    <div class="card-header">Agregar / Editar</div>
                    <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Nombre del gasto</label>
                          <input type="text" class="form-control"
                                 name="name"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                                 id="exampleInputPassword1" placeholder="Reparación" />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Monto (EUR)</label>
                          <input type="number" class="form-control" 
                                  id="exampleInputPassword1"
                                  name="amount"
                                  value={amount}
                                  onChange={(e) => setAmount(e.target.value)}
                                  placeholder="100" />
                        </div>

                    
                        {/* <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Fecha</label>
                          <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Reparación" />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Adjunto</label>
                          <input type="file" class="form-control" id="exampleInputPassword1" />
                        </div> */}
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-4">Agregar</button>
            </div>
        </form>
  )
}
