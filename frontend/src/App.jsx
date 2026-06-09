import {
  Routes,
  Route
} from "react-router-dom";


import Layout from "./layouts/Layout";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Staff from "./pages/Staff";
import Visits from "./pages/Visits";


export default function App(){

return (

<Routes>

<Route element={<Layout/>}>


<Route 
path="/" 
element={<Dashboard/>}
/>


<Route
path="/patients"
element={<Patients/>}
/>


<Route
path="/staff"
element={<Staff/>}
/>


<Route
path="/visits"
element={<Visits/>}
/>


</Route>

</Routes>

)

}
