import React from "react";

const BookingServiceModal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#272A3052] bg-opacity-50">
      <div className="bg-white rounded-2xl p-3 max-w-sm w-full shadow-xl">
        <h2 className="text-xl font-semibold pb-4 text-[#2540AC]">Book this service</h2>

        <div className="border border-[#272A301F] p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="bg-[#C5FB9B] text-[#2C6410] text-xs font-medium px-2 py-1 rounded-full">
              {service.serviceCategory}
            </span>
            <span className="text-[#2540AC] font-medium text-lg">${service.price}</span>
          </div>
          <p className="text-gray-700 mt-2 text-sm">{service.description.title}</p>
          <div className="flex items-center gap-2 mt-3">
            <img src={service.avatar} className="w-8 h-8 rounded-full" alt="User Avatar" />
            <div className="flex flex-col">
              <div className="flex gap-1.5 items-center">
                <p className="text-gray-900 font-medium flex items-center">{service.name}</p>
                <img src={service.verifiedIcon} className="w-4 h-4" alt="Verified Icon" />
              </div>
              <p className="text-xs text-gray-400">{service.role}</p>

            </div>
          </div>
        </div>

        <h3 className="mt-4 font-medium">Availability</h3>
        <div className="mt-2">
          {service.availability.map((slot, index) => (
            <div key={index} className="flex items-center space-x-2 py-1">
              <input
                type="checkbox"
                className="h-4 w-4 rounded-md border-gray-300 text-white 
             accent-[#2540AC] checked:bg-[#2540AC] checked:border-[#2540AC]"
                defaultChecked={index === 0}
              />              <span className="text-gray-700 text-sm">{slot.day} - {slot.time}</span>
            </div>
          ))}
        </div>

        <textarea className="w-full bg-[#E9EBED] mt-4 py-2 pb-5 px-3 rounded-md" placeholder="Write a message..."></textarea>

        <div className="flex justify-end items-center gap-3 mt-4">
          <button onClick={onClose} className="text-[#494F5A] font-medium hover:cursor-pointer">Discard</button>
          <button className="bg-[#2540AC] text-white px-4 py-2 rounded-3xl hover:cursor-pointer">Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookingServiceModal;
