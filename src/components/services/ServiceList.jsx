import React from "react";
import ServiceCard from "./ServiceCard";
import { useSelector } from "react-redux";

const ServiceList = () => {
    const services = useSelector((state) => state.services.services);
    return (
            <div className="">
                {services.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
    );
};

export default ServiceList;
