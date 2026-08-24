import { useNavigate } from "react-router-dom";

const patients = [
  // existing data...
];

function Patients() {
  const navigate = useNavigate();

  return (
const patients = [
  {
    patientNo: "PT-2026-00124",
    firstName: "John",
    lastName: "Kamau",
    gender: "Male",
    dateOfBirth: "1988-04-14",
    phone: "0712 345 678",
    status: "Active",
  },
  {
    patientNo: "PT-2026-00123",
    firstName: "Mary",
    lastName: "Wanjiku",
    gender: "Female",
    dateOfBirth: "1992-08-21",
    phone: "0723 456 789",
    status: "Active",
  },
  {
    patientNo: "PT-2026-00122",
    firstName: "David",
    lastName: "Mwangi",
    gender: "Male",
    dateOfBirth: "1979-02-10",
    phone: "0701 234 567",
    status: "Inactive",
  },
  {
    patientNo: "PT-2026-00121",
    firstName: "Grace",
    lastName: "Njeri",
    gender: "Female",
    dateOfBirth: "1996-11-03",
    phone: "0798 123 456",
    status: "Active",
  },
  {
    patientNo: "PT-2026-00120",
    firstName: "Peter",
    lastName: "Ochieng",
    gender: "Male",
    dateOfBirth: "1985-06-17",
    phone: "0715 987 654",
    status: "Active",
  },
];

function Patients() {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>Patients</h1>
          <p>Manage patient records and demographics</p>
        </div>

        <button className="primary-button" type="button">
          + Register Patient
        </button>
      </div>

      <div className="page-card">
        <div className="patient-toolbar">
          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search by patient number, name or phone..."
            />
          </div>

          <select className="filter-select" defaultValue="all">
            <option value="all">All Patients</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient No.</th>
                <th>Patient Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient) => (
                <tr key={patient.patientNo}>
                  <td className="patient-number">
                    {patient.patientNo}
                  </td>

                  <td>
                    <div className="patient-name">
                      {patient.firstName} {patient.lastName}
                    </div>
                  </td>

                  <td>{patient.gender}</td>

                  <td>{patient.dateOfBirth}</td>

                  <td>{patient.phone}</td>

                  <td>
                    <span
                      className={`status-badge status-${patient.status.toLowerCase()}`}
                    >
                      {patient.status}
                    </span>
                  </td>

                  <td>
                    <button className="table-action" type="button">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 5 of 1,248 patients</span>

          <div className="pagination">
            <button type="button">Previous</button>
            <button type="button" className="pagination-active">
              1
            </button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
