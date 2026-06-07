export default function Sidebar({ setPage }) {
  return (
    <div style={{
      width: 200,
      height: '100vh',
      background: '#1f2937',
      color: 'white',
      padding: 20
    }}>
      <h2>HOMIS</h2>

      <button onClick={() => setPage('dashboard')}>Dashboard</button>
      <button onClick={() => setPage('patients')}>Patients</button>
      <button onClick={() => setPage('staff')}>Staff</button>
      <button onClick={() => setPage('visits')}>Visits</button>
    </div>
  )
}
