import React from "react";
import arrow from '../../assets/whiteArrow.png'
const ServiceDetailCard = ({
  isModalOn,
  name,
  role,
  type,
  description,
  availability,
  price,
  avatar,
  verifiedIcon,
}) => {
  return (
    <div className="bg-[#F7F8F9] rounded-2xl p-3 flex flex-col justify-between h-full ">
      <div>
        <div className="flex items-center gap-3">
          <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold flex items-center">
              {name}
              <img src={verifiedIcon} alt="verified" className="w-4 h-4 ml-1" />
            </p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <h6 className="text-sm text-[#7E8695]">Type:</h6>

          <span className="text-sm font-medium bg-purple-200 text-[#6211C5] px-3 py-1 rounded-full">
            {type}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="py-4 text-xl font-semibold text-[#2540AC]">
          {description.title}
        </h2>
        <div>
          <h6 className="text-sm text-[#7E8695]">Description</h6>
          <p className="text-gray-600 ">{description.details}</p>
        </div>
      </div>

      <hr className="border-[#272A301F] my-4" />
      <div className="flex-1">
        <h3 className="font-medium text-xl">Availability</h3>
        {availability.map((day, index) => (
          <div key={index}>
            <p className="font-medium">{day.day}</p>
            <p className="text-gray-500 text-sm">{day.time}</p>
          </div>
        ))}
      </div>

      <div onClick={() => isModalOn(true)} className="mt-5 bg-[#2540AC] text-white p-3 py-5 flex justify-between items-end rounded-2xl hover:cursor-pointer">
        <div className="flex flex-col">
          <p>Price</p>
          <p className="text-3xl font-semibold">${price}</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="font-medium">
            Book
          </button>
          <img src={arrow} className="w-1.5 h-2.5" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
