import React, { useState } from 'react'
import ServiceList from '../components/services/ServiceList'
import SelectedService from '../components/services/ServiceDetailCard'
import { useSelector } from 'react-redux'
import BookingServiceModal from '../components/services/BookingServiceModal';
import SearchCommon from '../components/common/SearchCommon';
import viewService from '../assets/viewService.png'
const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const selectedService = useSelector((state) => state.services.selectedService);
    console.log(isModalOpen)
    return (

        <div className='flex gap-2 w-[-webkit-fill-available]'>
            <div className='w-[30%] bg-[#F7F8F9] rounded-2xl overflow-y-scroll no-scrollbar'>
                <h1 className="text-2xl text-[#2540AC] font-medium py-3 px-4">Services</h1>
                <div className='px-3 py-2'>
                    <SearchCommon />
                </div>
                <ServiceList />
            </div>

            {!selectedService && (
                <div className='w-2/4 h-full flex flex-col gap-3 justify-center items-center'>
                    <img src={viewService} className='w-32' alt="viewService" />
                    <h1 className='text-xl'>Select a service to view</h1>
                </div>
            )}

            {selectedService && (<div className='w-[45%]'>  <SelectedService {...selectedService} isModalOn={setIsModalOpen} /> </div>)}

            {isModalOpen && (
                <BookingServiceModal service={selectedService} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    )
}

export default Services



