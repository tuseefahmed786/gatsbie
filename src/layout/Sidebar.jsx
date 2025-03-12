import React from 'react'
import { Link } from 'react-router-dom'
import serviceIcon from '../assets/serviceIcon.png'
import peopleIcon from '../assets/peopleIcon.png'
import howtoIcon from '../assets/howtoIcon.png'
import groupIcon from '../assets/groupIcon.png'

const SideBar = () => {
    return (
        <aside className="px-3 w-[8%]">
            <div className='px-2 py-4 rounded-2xl h-full bg-[#F7F8F9]'>
                <ul className="flex flex-col gap-5">
                    <Link to="/home/groups" className="block text-[#7E8695] hover:cursor-pointer text-sm">
                        <li className='flex gap-1  flex-col justify-center items-center '>
                            <img src={groupIcon} alt="group Icon" />
                            Groups

                        </li></Link>
                        <Link to="/home/people" className="hover:cursor-pointer text-[#7E8695] text-sm "><li className='flex flex-col gap-1 justify-center items-center'>
                        <img src={peopleIcon} alt="People Icon" />

                        People</li></Link>
                        <Link to="/home/services" className=" text-[#2540AC] text-sm "> <li className='flex  gap-1  flex-col justify-center items-center hover:cursor-pointer'>
                        <img src={serviceIcon} alt="Service Icon" />

                       Services</li></Link>
                       <Link to="/home/howto" className=" text-[#7E8695] text-sm "> <li className='flex gap-1  flex-col justify-center items-center hover:cursor-pointer'>
                        <img src={howtoIcon} alt="how to Icon" />
                        How to</li></Link>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
