import {Link} from "react-router-dom";


export default function Sidebar(){

return (

<div style={{
width:"230px",
background:"#111827",
color:"white",
height:"100vh",
padding:"20px"
}}>


<h2>🏥 HOMIS</h2>


<nav>

<p>
<Link to="/" style={{color:"white"}}>
Dashboard
</Link>
</p>


<p>
<Link to="/patients" style={{color:"white"}}>
Patients
</Link>
</p>


<p>
<Link to="/staff" style={{color:"white"}}>
Staff
</Link>
</p>


<p>
<Link to="/visits" style={{color:"white"}}>
Visits
</Link>
</p>


<p>
<Link to="/patients/register">
Register Patient
</Link>
</p>



</nav>


</div>

)

}
