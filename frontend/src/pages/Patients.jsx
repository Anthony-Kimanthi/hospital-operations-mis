import DataTable from "../components/DataTable";


export default function Patients(){


const patients=[

{
"Patient No":"P0001",
"Name":"John Doe",
"Gender":"Male",
"DOB":"1990-01-01",
"Status":"Active"
},

{
"Patient No":"P0002",
"Name":"Jane Smith",
"Gender":"Female",
"DOB":"1987-04-11",
"Status":"Admitted"
}

];


return (

<div>

<div
style={{
display:"flex",
justifyContent:"space-between"
}}
>

<h1>
Patients
</h1>


<button>
+ Register Patient
</button>


</div>


<DataTable

columns={[
"Patient No",
"Name",
"Gender",
"DOB",
"Status"
]}

data={patients}

/>


</div>

)

}
