import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import {useAuth} from './../../../contexts/AuthContext';
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "./../../../firebase/firebaseConfig";
import { toast } from 'react-toastify';

export default function ChatRoomForm() {

  const [message, setMessage] = useState("");

  const { id } = useSelector(state => state.building);
  const { user } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      message : message,
      building_id : id,
      user_id : user.uid,
  }
  try {
    const docRef = await addDoc(collection(db, "messages"), data);
    toast("Se ha agregado un Mensaje.")
} catch (e) {
    console.error("Error: ", e);
}
setMessage("");

}

  return (
    <form action="" onSubmit={onSubmit}>
            <div className="card border-primary mb-3">
                    <div className="card-header">Enviar Mensaje</div>
                    <div className="card-body">
                        <div className="form-group">
                          <label className="form-label mt-4">Mensaje</label>
                          <input type="text" className="form-control"
                                 name="message"
                                 value={message}
                                 onChange={(e) => setMessage(e.target.value)} required
                                 id="idMessage" placeholder="Mensaje" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-4">Agregar</button>
            </div>
        </form>
  )
}
