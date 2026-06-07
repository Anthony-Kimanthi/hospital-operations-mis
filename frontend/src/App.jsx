import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import Staff from './pages/Staff'
import Visits from './pages/Visits'
import Sidebar from './components/Sidebar'

export default function App() {
  const [page, setPage] = useState('dashboard')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setPage={setPage} />

      <div style={{ padding: 20, width: '100%' }}>
        {page === 'dashboard' && <Dashboard />}
        {page === 'patients' && <Patients />}
        {page === 'staff' && <Staff />}
        {page === 'visits' && <Visits />}
      </div>
    </div>
  )
}
