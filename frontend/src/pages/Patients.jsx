export default function Patients() {
  return (
    <div>
      <h1>Patients</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Patient No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>DOB</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>P001</td>
            <td>John</td>
            <td>Doe</td>
            <td>Male</td>
            <td>1990-01-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
