import { useNavigate, useParams } from "react-router-dom";

const patients = {
  "PT-2026-00124": {
    patientNo: "PT-2026-00124",
    firstName: "John",
    lastName: "Kamau",
    gender: "Male",
    dateOfBirth: "14 Apr 1988",
    phone: "0712 345 678",
    address: "Nairobi, Kenya",
    status: "Active",
  },

  "PT-2026-00123": {
    patientNo: "PT-2026-00123",
    firstName: "Mary",
    lastName: "Wanjiku",
    gender: "Female",
    dateOfBirth: "21 Aug 1992",
    phone: "0723 456 789",
    address: "Nairobi, Kenya",
    status: "Active",
  },

  "PT-2026-00122": {
    patientNo: "PT-2026-00122",
    firstName: "David",
    lastName: "Mwangi",
    gender: "Male",
    dateOfBirth: "10 Feb 1979",
    phone: "0701 234 567",
    address: "Kiambu, Kenya",
    status: "Inactive",
  },

  "PT-2026-00121": {
    patientNo: "PT-2026-00121",
    firstName: "Grace",
    lastName: "Njeri",
    gender: "Female",
    dateOfBirth: "03 Nov 1996",
    phone: "0798 123 456",
    address: "Nairobi, Kenya",
    status: "Active",
  },

  "PT-2026-00120": {
    patientNo: "PT-2026-00120",
    firstName: "Peter",
    lastName: "Ochieng",
    gender: "Male",
    dateOfBirth: "17 Jun 1985",
    phone: "0715 987 654",
    address: "Nairobi, Kenya",
    status: "Active",
  },
};

const visits = [
  {
    id: 1,
    date: "24 Aug 2026",
    type: "General Consultation",
    status: "Completed",
  },
  {
    id: 2,
    date: "18 Aug 2026",
    type: "Follow-up",
    status: "Completed",
  },
  {
    id: 3,
    date: "04 Aug 2026",
    type: "Laboratory",
    status: "Completed",
  },
];

const diagnoses = [
  {
    id: 1,
    date: "24 Aug 2026",
    diagnosis: "Upper respiratory tract infection",
    clinician: "Dr. James Mwangi",
  },
  {
    id: 2,
    date: "18 Aug 2026",
    diagnosis: "Hypertension",
    clinician: "Dr. Sarah Wambui",
  },
];

const labTests = [
  {
    id: 1,
    date: "24 Aug 2026",
    test: "Complete Blood Count",
    status: "Completed",
    result: "Normal",
  },
  {
    id: 2,
    date: "24 Aug 2026",
    test: "Malaria Test",
    status: "Pending",
    result: "Awaiting result",
  },
];

function PatientProfile() {
  const navigate = useNavigate();
  const { patientId } = useParams();

  const patient = patients[patientId];

  // Handle an invalid patient number gracefully.
  if (!patient) {
    return (
      <div className="page">
        <div className="page-heading">
          <div>
            <h1>Patient Not Found</h1>
            <p>
              No patient record was found for {patientId}.
            </p>
          </div>

          <button
            className="secondary-button"
            type="button"
            onClick={() => navigate("/patients")}
          >
            ← Back to Patients
          </button>
        </div>
      </div>
    );
  }

  const patientInitials = `${patient.firstName.charAt(
    0
  )}${patient.lastName.charAt(0)}`;

  return (
    <div className="page">
      {/* Patient Header */}

      <div className="patient-profile-header">
        <div className="patient-profile-title">
          <button
            className="back-button"
            type="button"
            onClick={() => navigate("/patients")}
            aria-label="Back to patients"
          >
            ←
          </button>

          <div className="patient-avatar">
            {patientInitials}
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

          <button
            className="secondary-button"
            type="button"
          >
            Edit Patient
          </button>

          <button
            className="primary-button"
            type="button"
          >
            + New Visit
          </button>
        </div>
      </div>

      {/* Patient Information + Summary */}

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

          <button
            className="text-button"
            type="button"
          >
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
                <tr key={visit.id}>
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

      {/* Diagnoses + Laboratory */}

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
                key={item.id}
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

            <button
              className="text-button"
              type="button"
            >
              View all
            </button>
          </div>

          <div className="clinical-list">
            {labTests.map((test) => (
              <div
                className="clinical-list-item"
                key={test.id}
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

      {/* Prescriptions + Admissions + Billing */}

      <section className="profile-grid profile-grid-three">
        <div className="profile-card mini-profile-card">
          <div className="profile-card-heading">
            <h2>Prescriptions</h2>
          </div>

          <div className="empty-state">
            <div className="empty-state-icon">
              Rx
            </div>

            <strong>No recent prescriptions</strong>

            <span>
              Prescription history will appear here.
            </span>
          </div>
        </div>

        <div className="profile-card mini-profile-card">
          <div className="profile-card-heading">
            <h2>Admissions</h2>
          </div>

          <div className="empty-state">
            <div className="empty-state-icon">
              ▥
            </div>

            <strong>No admissions</strong>

            <span>
              Admission history will appear here.
            </span>
          </div>
        </div>

        <div className="profile-card mini-profile-card">
          <div className="profile-card-heading">
            <h2>Billing</h2>
          </div>

          <div className="billing-summary">
            <span>Outstanding Balance</span>

            <strong>KES 0.00</strong>

            <small>
              No outstanding invoices
            </small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PatientProfile;
