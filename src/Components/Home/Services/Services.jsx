import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services,setService]=useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <div className='text-center mt-4'>
                <h2 className='tetx-xl font-bold text-orange-500'>Services</h2>
                <h2 className='text-2xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;