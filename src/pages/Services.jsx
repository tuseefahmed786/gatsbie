import React, { useEffect, useState } from 'react'
import ServiceList from '../components/services/ServiceList'
import SelectedService from '../components/services/ServiceDetailCard'
import { useSelector } from 'react-redux'
import BookingServiceModal from '../components/services/BookingServiceModal';
import SearchCommon from '../components/common/SearchCommon';
import viewService from '../assets/viewService.png'
const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
// const [isSelectedOpen, setIsSelectedOpen] = useState(fasle) // It's just for mobile view
    const selectedService = useSelector((state) => state.services.selectedService);

    useEffect(() => {
        // Scroll to top when a service is selected in mobile view
        if (selectedService && window.innerWidth < 640) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [selectedService]);
    return (

        <div className=' flex gap-2 w-full sm:w-[90%]'>
            <div className='w-full sm:w-1/2 md:w-[30%] sm:bg-[#F7F8F9] rounded-2xl overflow-y-scroll no-scrollbar'>
                <h1 className="text-2xl text-[#2540AC] font-medium py-3 px-4">Services</h1>
                <div className='px-3 py-2'>
                    <SearchCommon />
                </div>
                <ServiceList />
            </div>

            {!selectedService && (
                <div className='hidden w-1/2  md:w-[70%] h-full sm:flex flex-col gap-3 justify-center items-center'>
                    <img src={viewService} className='w-32' alt="viewService" />
                    <h1 className='text-xl'>Select a service to view</h1>
                </div>
            )}

            {selectedService && (<div className='fixed inset-0 flex items-end sm:block bg-[#272A3052] sm:bg-transparent bg-opacity-50 sm:min-h-fit w-full  sm:static sm:w-1/2 md:w-[45%]'>  <SelectedService {...selectedService} isModalOn={setIsModalOpen}  /> </div>)}

            {isModalOpen && (
                <BookingServiceModal service={selectedService} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    )
}

export default Services