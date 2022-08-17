import React, {useState, useEffect} from 'react';
import ExpensesForm from './ExpensesForm'
import {db} from "./../../../firebase/firebaseConfig";
import {collection, onSnapshot, deleteDoc, doc, query, orderBy, where} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function ExpensesList() {
  const [expenses, setExpenses] = useState([])
  const { id } = useSelector(state => state.building);

  const myquery = query(
    collection(db, 'expenses'),
    where('building_id', '==', id),
    orderBy('name', 'desc')
    );  

  useEffect(() => {
    onSnapshot(myquery,
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
                <td>{item.date}</td>
                <td>{item.amount} €</td>
                <td><a className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg>
                    </a></td>
                <td>
                        {/* <button className="btn btn-warning mx-1">Editar</button> */}
                        <button onClick={() => deleteItem(item.id)} className="btn btn-danger mx-1">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
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
