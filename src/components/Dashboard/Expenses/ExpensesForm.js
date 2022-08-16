import React from 'react'

export default function ExpensesForm() {
  return (
    <form>
            <div class="card border-primary mb-3">
                    <div class="card-header">Agregar / Editar</div>
                    <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Nombre del gasto</label>
                          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Reparación" />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Monto</label>
                          <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Reparación" />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Fecha</label>
                          <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Reparación" />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1" class="form-label mt-4">Adjunto</label>
                          <input type="file" class="form-control" id="exampleInputPassword1" />
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-4">Agregar</button>
            </div>
        </form>
  )
}
