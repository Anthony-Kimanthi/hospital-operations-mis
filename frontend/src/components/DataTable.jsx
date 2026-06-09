export default function DataTable({
  columns,
  data
}) {

return (

<table
style={{
width:"100%",
background:"white",
borderCollapse:"collapse",
marginTop:"20px"
}}
>

<thead>

<tr>

{
columns.map(col => (

<th
key={col}
style={{
padding:"12px",
borderBottom:"1px solid #ddd",
textAlign:"left"
}}
>

{col}

</th>

))
}

</tr>

</thead>


<tbody>

{
data.map((row,index)=>(

<tr key={index}>

{
Object.values(row).map((value,i)=>(

<td
key={i}
style={{
padding:"12px",
borderBottom:"1px solid #eee"
}}
>

{value}

</td>

))
}

</tr>

))
}

</tbody>


</table>

)

}
