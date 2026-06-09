import Sidebar from "../components/Sidebar";


export default function Layout({children}){

return (

<div style={{
display:"flex"
}}>


<Sidebar />


<div style={{
flex:1,
padding:"20px",
background:"#f5f7fb",
minHeight:"100vh"
}}>

{children}

</div>


</div>

)

}
