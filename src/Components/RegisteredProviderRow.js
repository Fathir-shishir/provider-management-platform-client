import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { data } from 'autoprefixer';
const RegisteredProviderRow = ({details,index}) => {
    const {_id,employeeid,positionid,agreementsid,employee_name,provider_name,contactperson,externalperson,rate,notes,dateuntil,document,status} =details

     const[isexist, setisexist]=useState(0)
    const[selectedProfile, setSelectedProfile]=useState([])
    useEffect(()=>{
        fetch('https://provider-management-platform-server.onrender.com/selectedProfile')
        .then(res=>res.json())
        .then(data=>{
            if(data?.some(offer => offer.employeeid === employeeid)){
                setisexist(1)
            } else{
                setisexist(0)
            }
        })
    },[])

   


    

    
    

   

    const onsubmit= (details)=>{
       
        fetch('https://provider-management-platform-server.onrender.com/selectedProfile',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(details)
    
        })
        .then(res=>res.json())
        .then(data=>{
            toast('added')
            
        })
    }

    return (
        <tr>
        <th>{ index+ 1}</th>
        <th>{ positionid}</th>
        <td>{employee_name}</td>     
        <td>{provider_name}</td>     
        {/* <td>{dateuntil}</td>      */}
        {/* <td>{document}</td>      */}
        <td>{contactperson}</td>     
        <td>{externalperson}</td>     
        <td>{notes}</td>     
        <td>{rate}</td>     
        <td>{dateuntil.slice(0, 15)}</td>     
        {/* <td>{offerid}</td>      */}
        {/* <td> { rate== 0 ? <button class="btn bg-black"> <Link to="/UpdateProviders" state={{ data: {_id} } }>Update</Link> </button> : <h1>{rate}</h1> }</td>      */}  
        <td>

       {
        isexist ? <button className='btn btn-primary' disabled>
        <Link to="/selectedProfile" state={{ data: {details} } }>already selected</Link>
         </button> : <button className='btn btn-primary'>
        <Link to="/selectedProfile" state={{ data: {details} } }>Select</Link>
         </button>

       }
        

          {/* {
            selectedProfile?.map((data)=>{ 
                data.selectedProfile == employeeid ? <button className='btn btn-primary'>
        <Link to="/selectedProfile" state={{ data: {details} } }>Select</Link>
         </button> : <button className='btn btn-primary'>
        <Link to="/selectedProfile" state={{ data: {details} } }>slected</Link>
         </button>
                
                })
          }        */}
        

         
         </td>     
        {/* <td>{agreementsId}</td>      */}
    </tr>
    );
};

export default RegisteredProviderRow;