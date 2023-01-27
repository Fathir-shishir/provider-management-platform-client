import React, { useEffect, useState } from 'react';

const useAgreements = () => {
    const[agreements, setAgreements]=useState([])
    useEffect(()=>{
        fetch('https://provider-management-platform-server.onrender.com/agreements')
        .then(res=>res.json())
        .then(data=>{
            
            setAgreements(data)
        })
    },[])


    return [agreements, setAgreements]
};

export default useAgreements;