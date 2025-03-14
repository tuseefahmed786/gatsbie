import React from 'react';
import { Link } from 'react-router-dom';
import serviceIcon from '../assets/serviceIcon.png';
import peopleIcon from '../assets/peopleIcon.png';
import howtoIcon from '../assets/howtoIcon.png';
import groupIcon from '../assets/groupIcon.png';

const SideBar = () => {
    return (
        <aside className="w-full sm:w-[10%] md:w-[6%]">
            <div className="sm:px-2 sm:py-4 rounded-2xl h-full sm:bg-[#F7F8F9]">
            <ul className="flex flex-row justify-center items-center sm:flex-col gap-2 sm:gap-5 w-full">
    <li className="flex flex-col gap-1 bg-[#E9EBED] sm:bg-transparent py-2 sm:p-0 rounded-4xl justify-center items-center w-full">
        <Link to="/home/groups" className="hover:cursor-pointer text-[#7E8695] text-sm w-full text-center">
            <img src={groupIcon} className="w-5 h-5 mx-auto" alt="Group Icon" />
            <p className="hidden sm:block">Groups</p>
        </Link>
    </li>
    <li className="flex flex-col gap-1 bg-[#E9EBED] sm:bg-transparent py-2 sm:p-0 rounded-4xl justify-center items-center w-full">
        <Link to="/home/people" className="hover:cursor-pointer text-[#7E8695] text-sm w-full text-center">
            <img src={peopleIcon} className="w-5 h-5 mx-auto" alt="People Icon" />
            <p className="hidden sm:block">People</p>
        </Link>
    </li>
    <li className="flex flex-col gap-1 bg-[#C2D9FB] sm:bg-transparent py-2 sm:p-0 rounded-4xl justify-center items-center w-full">
        <Link to="/home/services" className="hover:cursor-pointer text-[#2540AC] text-sm w-full text-center">
            <img src={serviceIcon} className="w-5 h-5 mx-auto" alt="Service Icon" />
            <p className="hidden sm:block">Services</p>
        </Link>
    </li>
    <li className="flex flex-col gap-1 bg-[#E9EBED] sm:bg-transparent py-2 sm:p-0 rounded-4xl justify-center items-center w-full">
        <Link to="/home/howto" className="hover:cursor-pointer text-[#7E8695] text-sm w-full text-center">
            <img src={howtoIcon} className="w-5 h-5 mx-auto" alt="How To Icon" />
            <p className="hidden sm:block">How To</p>
        </Link>
    </li>
</ul>

            </div>
        </aside>
    );
};

export default SideBar;
