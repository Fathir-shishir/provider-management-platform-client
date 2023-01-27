import React from 'react';

const DashboardRow = ({details,index}) => {
    const {employeeid,positionid,agreementsid,document,employee_name,externalperson,notes,offerid,provider_name,rate,contactperson,status,dateuntil} =details
    return (
        <tr>
       <th>{ index+ 1}</th>
        <th>{ employeeid}</th>
        <th>{ positionid}</th>
        <th>{ agreementsid}</th>
        <td>{employee_name}</td>     
        <td>{provider_name}</td>     
        {/* <td>{dateuntil}</td>      */}
        {/* <td>{document}</td>      */}
        <td>{contactperson}</td>     
        <td>{externalperson}</td>     
        <td>{notes}</td>     
        <td>{rate}</td>     
        <td>{dateuntil.slice(0, 15)}</td>  
        <td>{status}</td>  
       
    </tr>
    );
};

export default DashboardRow;