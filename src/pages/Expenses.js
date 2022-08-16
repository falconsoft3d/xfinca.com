import React from 'react'
import ExpensesList from '../components/Dashboard/Expenses/ExpensesList'
import DashboardLayout from '../layout/DashboardLayout'

export default function Expenses() {
  return (
    <DashboardLayout>
        <ExpensesList />
    </DashboardLayout>
  )
}
