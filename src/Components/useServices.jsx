import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services,setService]=useState([])
    useEffect(()=>{

        fetch(' https://car-doctor-server-jajwwg2gc-md-emons-projects.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return services;
};

export default useServices;