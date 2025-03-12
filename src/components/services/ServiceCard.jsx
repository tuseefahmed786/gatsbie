import React from "react";
import { selectService } from "../../redux/servicesSlice";
import { useDispatch, useSelector } from "react-redux";
import arrow from '../../assets/arrow.png'
const ServiceCard = ({ id,name, role, serviceCategory, description, price, avatar, verifiedIcon }) => {
    const dispatch = useDispatch();
    const selectedServiceId = useSelector((state) => state.services.selectedService?.id);

    return (
        <div
        className={`px-4 py-4 w-full border-b border-[#272A301F] hover:cursor-pointer 
            ${selectedServiceId === id ? "bg-[#E9EBED] rounded-2xl border-none" : "bg-transparent"}`}
         
         onClick={()=> dispatch(selectService(id))}>
            <div className="flex justify-between items-center">
                <span className="bg-[#C5FB9B] text-[#2C6410] text-sm font-medium px-2 py-0.5 rounded-full">
                    {serviceCategory}
                </span>
                <span className="text-[#2540AC] font-medium text-xl">${price}</span>
            </div>

            <p className=" text-[#494F5A] mt-2 text-sm lg:text-base">
                {description.title}      </p>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                    <img src={avatar} className="w-10 h-10" alt="User Avatar" />
                    <div>
                        <div className="flex gap-2 items-center">
                            <p className="text-gray-900 font-medium flex items-center">
                                {name}
                            </p>
                            <img src={verifiedIcon} className="w-4 h-4" alt="tickIcon" />
                        </div>

                        <p className="text-gray-400 text-xs">{role}</p>
                    </div>
                </div>

                <img className="w-1.5 h-2.5" src={arrow} alt="arrow" />
            </div>
        </div>
    );
};

export default ServiceCard;

