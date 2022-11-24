import React, { useEffect, useState } from 'react';

const useAgreements = () => {
    const[agreements, setAgreements]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/agreements')
        .then(res=>res.json())
        .then(data=>setAgreements(data))
    },[])

    return [agreements, setAgreements]
};

export default useAgreements;