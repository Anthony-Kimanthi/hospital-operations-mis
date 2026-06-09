import Card from "../components/Card";

export default function Dashboard(){

return (
<div>

<h1>HOMIS Dashboard</h1>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px"
}}>


<Card title="Patients" value="1245"/>

<Card title="Staff" value="86"/>

<Card title="Visits Today" value="143"/>

<Card title="Revenue" value="KES 450K"/>


</div>


</div>
)

}
