import React from 'react'
import ExpensesForm from './ExpensesForm'

export default function ExpensesList() {
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
                <th>Monto (EUR)</th>
                <th>Comprobante</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>12:12:12</td>
                <td>100</td>
                <td><a className="btn btn-primary">Ver</a></td>
                <td>
                           <button className="btn btn-warning mx-1">Editar</button>
                           <button className="btn btn-danger mx-1">Eliminar</button>
                </td>
            </tr>
            
        </tbody>
        </table>
                       
                    </div>
            </div>


        
    </div>
</div>
</>
  )
}
