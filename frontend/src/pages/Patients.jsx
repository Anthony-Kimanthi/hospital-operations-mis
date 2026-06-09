export default function Patients(){


return (

<div>

<h1>
Patients
</h1>


<button>
+ Register Patient
</button>


<table
style={{
width:"100%",
marginTop:"20px",
background:"white"
}}
>


<thead>

<tr>

<th>Patient No</th>
<th>Name</th>
<th>Gender</th>
<th>DOB</th>

</tr>

</thead>


<tbody>


<tr>

<td>P0001</td>

<td>
John Doe
</td>

<td>
Male
</td>

<td>
1990-01-01
</td>


</tr>


</tbody>


</table>


</div>

)

}
