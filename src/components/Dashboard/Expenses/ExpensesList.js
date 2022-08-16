import React, {useState, useEffect} from 'react';
import ExpensesForm from './ExpensesForm'
import {db} from "./../../../firebase/firebaseConfig";
import {collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function ExpensesList() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    onSnapshot(
        collection(db, 'expenses'),
        (snapshot) => {
            const data = snapshot.docs.map((documento) => {
                return {...documento.data(), id: documento.id}
            })
            setExpenses(data);
        },
        (error) => {
            console.log(error);
        }
    );
}, []);


const deleteItem = async(id) => {
    try {
        await deleteDoc(doc(db, 'expenses', id));
        toast("Se eliminó correctamente");

    } catch(error){
        console.log('Hubo un error al intentar eliminar el usuario')
        console.log(error);
    }
}





  return (
    <>
    <div class="row">
         <div class="col-md-4">
            <ExpensesForm />
         </div>
        <div class="col-md-8">

        <div class="card border-primary mb-3">
                    <div class="card-header">Lista de Gastos</div>
                    <div class="card-body">
        
        <table id="example" className="display table table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Comprobante</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        {expenses.map((item) => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>1</td>
                <td>{item.amount} €</td>
                <td><a className="btn btn-primary">Ver</a></td>
                <td>
                           {/* <button className="btn btn-warning mx-1">Editar</button> */}
                           <button onClick={() => deleteItem(item.id)} className="btn btn-danger mx-1">Eliminar</button>
                </td>
            </tr>
            ))}
            
        </tbody>
        </table>
                       
                    </div>
            </div>


        
    </div>
</div>
</>
  )
}
