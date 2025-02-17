import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";





const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=" mb-7">
            <div className="space-y-3 text-center">
                <h5 className="text-3xl font-semibold text-orange-500">Services</h5>
                <h3 className='text-3xl font-semibold'>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
                {
                    services.map(service => <ServiceCard
                        key={service._id} 
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;