import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import RegisterPatient from "./pages/RegisterPatient";
import PatientProfile from "./pages/PatientProfile";
import Staff from "./pages/Staff";
import Visits from "./pages/Visits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Dashboard */}

          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* Patients */}

          <Route
            path="/patients"
            element={<Patients />}
          />

          <Route
            path="/patients/register"
            element={<RegisterPatient />}
          />

          <Route
            path="/patients/:patientId"
            element={<PatientProfile />}
          />

          {/* Other modules */}

          <Route
            path="/staff"
            element={<Staff />}
          />

          <Route
            path="/visits"
            element={<Visits />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
