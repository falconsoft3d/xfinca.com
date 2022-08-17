import React from 'react'
import ChatRoomForm from '../components/Dashboard/ChatRoom/ChatRoomForm'
import ChatRoomList from '../components/Dashboard/ChatRoom/ChatRoomList'
import DashboardLayout from '../layout/DashboardLayout'

export default function Messages() {
  return (
    <DashboardLayout>
         <>
          <div className="row">
             <div className="col-md-4">
                <ChatRoomForm />
             </div>
             <div className="col-md-8">
                 <ChatRoomList />
             </div>
          </div>
        </>
    </DashboardLayout>
  )
}

