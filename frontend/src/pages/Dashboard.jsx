const stats = [
  {
    label: "Total Patients",
    value: "1,248",
    change: "+8.2%",
    description: "vs. last month",
    icon: "♙",
  },
  {
    label: "Today's Visits",
    value: "143",
    change: "+12",
    description: "from yesterday",
    icon: "◉",
  },
  {
    label: "Bed Occupancy",
    value: "74%",
    change: "68 / 92",
    description: "beds occupied",
    icon: "▥",
  },
  {
    label: "Revenue",
    value: "KES 485K",
    change: "+6.4%",
    description: "this month",
    icon: "¤",
  },
];

const recentPatients = [
  {
    patientNo: "PT-2026-00124",
    name: "John Kamau",
    visit: "General Consultation",
    status: "Active",
  },
  {
    patientNo: "PT-2026-00123",
    name: "Mary Wanjiku",
    visit: "Laboratory",
    status: "Pending",
  },
  {
    patientNo: "PT-2026-00122",
    name: "David Mwangi",
    visit: "Follow-up",
    status: "Completed",
  },
  {
    patientNo: "PT-2026-00121",
    name: "Grace Njeri",
    visit: "Pharmacy",
    status: "Active",
  },
];

const todaysVisits = [
  {
    time: "08:30",
    patient: "John Kamau",
    type: "General Consultation",
    status: "Completed",
  },
  {
    time: "09:15",
    patient: "Mary Wanjiku",
    type: "Laboratory",
    status: "In Progress",
  },
  {
    time: "10:00",
    patient: "David Mwangi",
    type: "Follow-up",
    status: "Pending",
  },
  {
    time: "10:45",
    patient: "Grace Njeri",
    type: "Pharmacy",
    status: "Pending",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Hospital operations overview</p>
        </div>

        <button className="primary-button" type="button">
          + Register Patient
        </button>
      </div>

      {/* Statistics */}

      <section className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-card-top">
              <div className="stat-icon">{stat.icon}</div>
              <span className="stat-change">{stat.change}</span>
            </div>

            <div className="stat-value">{stat.value}</div>

            <div className="stat-label">{stat.label}</div>

            <div className="stat-description">{stat.description}</div>
          </div>
        ))}
      </section>

      {/* Main dashboard grid */}

      <section className="dashboard-grid">
        {/* Recent Patients */}

        <div className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Recent Patients</h2>
              <p>Latest patient activity</p>
            </div>

            <button className="text-button" type="button">
              View all
            </button>
          </div>

          <div className="table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Patient No.</th>
                  <th>Patient</th>
                  <th>Visit</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentPatients.map((patient) => (
                  <tr key={patient.patientNo}>
                    <td className="patient-number">
                      {patient.patientNo}
                    </td>
                    <td>{patient.name}</td>
                    <td>{patient.visit}</td>
                    <td>
                      <span
                        className={`status-badge status-${patient.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {patient.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Today's Visits */}

        <div className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Today's Visits</h2>
              <p>Scheduled and active visits</p>
            </div>

            <button className="text-button" type="button">
              View all
            </button>
          </div>

          <div className="visit-list">
            {todaysVisits.map((visit) => (
              <div className="visit-item" key={`${visit.time}-${visit.patient}`}>
                <div className="visit-time">{visit.time}</div>

                <div className="visit-info">
                  <div className="visit-patient">{visit.patient}</div>
                  <div className="visit-type">{visit.type}</div>
                </div>

                <span
                  className={`status-badge status-${visit.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {visit.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom section */}

      <section className="dashboard-grid dashboard-grid-bottom">
        <div className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Bed Occupancy</h2>
              <p>Current hospital capacity</p>
            </div>
          </div>

          <div className="occupancy">
            <div className="occupancy-number">74%</div>

            <div className="occupancy-details">
              <strong>68 of 92 beds occupied</strong>
              <span>24 beds currently available</span>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-value" style={{ width: "74%" }} />
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Operational Alerts</h2>
              <p>Items requiring attention</p>
            </div>
          </div>

          <div className="alert-list">
            <div className="alert-item">
              <span className="alert-icon warning">!</span>

              <div>
                <strong>Pharmacy stock alert</strong>
                <span>5 medicines below reorder level</span>
              </div>
            </div>

            <div className="alert-item">
              <span className="alert-icon info">i</span>

              <div>
                <strong>Pending laboratory tests</strong>
                <span>12 results awaiting completion</span>
              </div>
            </div>

            <div className="alert-item">
              <span className="alert-icon critical">!</span>

              <div>
                <strong>Bed capacity warning</strong>
                <span>ICU occupancy is above 85%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
