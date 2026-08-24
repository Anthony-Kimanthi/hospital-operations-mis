const patient = {
  patientNo: "PT-2026-00124",
  firstName: "John",
  lastName: "Kamau",
  gender: "Male",
  dateOfBirth: "14 Apr 1988",
  phone: "0712 345 678",
  address: "Nairobi, Kenya",
  status: "Active",
};

const visits = [
  {
    date: "24 Aug 2026",
    type: "General Consultation",
    status: "Completed",
  },
  {
    date: "18 Aug 2026",
    type: "Follow-up",
    status: "Completed",
  },
  {
    date: "04 Aug 2026",
    type: "Laboratory",
    status: "Completed",
  },
];

const diagnoses = [
  {
    date: "24 Aug 2026",
    diagnosis: "Upper respiratory tract infection",
    clinician: "Dr. James Mwangi",
  },
  {
    date: "18 Aug 2026",
    diagnosis: "Hypertension",
    clinician: "Dr. Sarah Wambui",
  },
];

const labTests = [
  {
    date: "24 Aug 2026",
    test: "Complete Blood Count",
    status: "Completed",
    result: "Normal",
  },
  {
    date: "24 Aug 2026",
    test: "Malaria Test",
    status: "Pending",
    result: "Awaiting result",
  },
];

function PatientProfile() {
  return (
    <div className="page">
      {/* Header */}

      <div className="patient-profile-header">
        <div className="patient-profile-title">
          <button className="back-button" type="button">
            ←
          </button>

          <div className="patient-avatar">
            JK
          </div>

          <div>
            <h1>
              {patient.firstName} {patient.lastName}
            </h1>

            <p>
              {patient.patientNo} · {patient.gender}
            </p>
          </div>
        </div>

        <div className="patient-profile-actions">
          <span className="status-badge status-active">
            {patient.status}
          </span>

          <button className="secondary-button" type="button">
            Edit Patient
          </button>

          <button className="primary-button" type="button">
            + New Visit
          </button>
        </div>
      </div>

      {/* Demographics */}

      <section className="profile-grid">
        <div className="profile-card">
          <div className="profile-card-heading">
            <h2>Patient Information</h2>
          </div>

          <div className="profile-details">
            <div>
              <span>Patient Number</span>
              <strong>{patient.patientNo}</strong>
            </div>

            <div>
              <span>Full Name</span>
              <strong>
                {patient.firstName} {patient.lastName}
              </strong>
            </div>

            <div>
              <span>Gender</span>
              <strong>{patient.gender}</strong>
            </div>

            <div>
              <span>Date of Birth</span>
              <strong>{patient.dateOfBirth}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{patient.phone}</strong>
            </div>

            <div>
              <span>Address</span>
              <strong>{patient.address}</strong>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card-heading">
            <h2>Patient Summary</h2>
          </div>

          <div className="summary-grid">
            <div className="summary-item">
              <strong>{visits.length}</strong>
              <span>Recent Visits</span>
            </div>

            <div className="summary-item">
              <strong>{diagnoses.length}</strong>
              <span>Diagnoses</span>
            </div>

            <div className="summary-item">
              <strong>{labTests.length}</strong>
              <span>Lab Tests</span>
            </div>

            <div className="summary-item">
              <strong>0</strong>
              <span>Admissions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visits */}

      <section className="profile-card profile-section-card">
        <div className="profile-card-heading">
          <div>
            <h2>Visits</h2>
            <p>Patient visit history</p>
          </div>

          <button className="text-button" type="button">
            View all
          </button>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Visit Type</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {visits.map((visit) => (
                <tr key={`${visit.date}-${visit.type}`}>
                  <td>{visit.date}</td>
                  <td>{visit.type}</td>
                  <td>
                    <span className="status-badge status-completed">
                      {visit.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Clinical + Laboratory */}

      <section className="profile-grid">
        <div className="profile-card">
          <div className="profile-card-heading">
            <div>
              <h2>Diagnoses</h2>
              <p>Recorded clinical diagnoses</p>
            </div>
          </div>

          <div className="clinical-list">
            {diagnoses.map((item) => (
              <div
                className="clinical-list-item"
                key={`${item.date}-${item.diagnosis}`}
              >
                <div>
                  <strong>{item.diagnosis}</strong>
                  <span>{item.clinician}</span>
                </div>

                <small>{item.date}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card-heading">
            <div>
              <h2>Laboratory</h2>
              <p>Recent laboratory investigations</p>
            </div>

            <button className="text-button" type="button">
              View all
            </button>
          </div>

          <div className="clinical-list">
            {labTests.map((test) => (
              <div
                className="clinical-list-item"
                key={`${test.date}-${test.test}`}
              >
                <div>
                  <strong>{test.test}</strong>
                  <span>{test.result}</span>
                </div>

                <span
                  className={`status-badge status-${test.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {test.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacy + Admissions + Billing */}

      <section className="profile-grid profile-grid-three">
        <div className="profile-card mini-profile-card">
          <div className="profile-card-heading">
            <h2>Prescriptions</h2>
          </div>

          <div className="empty-state">
            <div className="empty-state-icon">Rx</div>
            <strong>No recent prescriptions</strong>
            <span>Prescription history will appear here.</span>
          </div>
        </div>

        <div className="profile-card mini-profile-card">
          <div className="profile-card-heading">
            <h2>Admissions</h2>
          </div>

          <div className="empty-state">
            <div className="empty-state-icon">▥</div>
            <strong>No admissions</strong>
            <span>Admission history will appear here.</span>
          </div>
        </div>

        <div className="profile-card mini-profile-card">
          <div className="profile-card-heading">
            <h2>Billing</h2>
          </div>

          <div className="billing-summary">
            <span>Outstanding Balance</span>
            <strong>KES 0.00</strong>
            <small>No outstanding invoices</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PatientProfile;
