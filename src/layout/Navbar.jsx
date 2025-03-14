import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Using Lucide icons for the menu toggle
import appLogo from '../assets/homelogo.png';
import notificationIcon from '../assets/notification.png';
import chatIcon from '../assets/chat.png';
import homeIcon from '../assets/homeicon.png';
import avatar from '../assets/avatar.png';
import SearchCommon from '../components/common/SearchCommon';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white p-3 flex items-center justify-between">
            <div className='flex items-center gap-3'>
                <img src={appLogo} alt="Logo" className="h-8" />
                <SearchCommon />
            </div>

            <div className='hidden md:flex gap-4 items-center'>
                <ul className="flex gap-7">
                    <li className='flex flex-col gap-1 items-center'>
                        <img src={homeIcon} alt="home icon" />
                        <Link to="/" className="text-[#2540AC] hover:bg-gray-200">Home</Link>
                    </li>
                    <li className='flex flex-col gap-1 items-center'>
                        <img src={chatIcon} alt="chat icon" />
                        <Link to="/chat" className="text-gray-400 hover:bg-gray-200">Chat</Link>
                    </li>
                    <li className='flex flex-col gap-1 items-center'>
                        <img src={notificationIcon} alt="notification icon" />
                        <Link to="/notifications" className="text-gray-400 hover:bg-gray-200">Notifications</Link>
                    </li>
                </ul>
                <div className='border border-gray-200 py-1.5'></div>
                <div className="flex items-center gap-2">
                    <img src={avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                    <div>
                        <h6>Beyoncé</h6>
                        <p className='text-gray-400 text-sm'>Prime Helper</p>
                    </div>
                </div>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <div className="absolute z-10  top-16 left-0 h-full w-full bg-white p-4 md:hidden">
                    <ul className="flex flex-col gap-4">
                        <li className='flex items-center gap-2'>
                            <img src={homeIcon} alt="home icon" />
                            <Link to="/" className="text-[#2540AC]" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src={chatIcon} alt="chat icon" />
                            <Link to="/chat" className="text-gray-400" onClick={() => setIsOpen(false)}>Chat</Link>
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src={notificationIcon} alt="notification icon" />
                            <Link to="/notifications" className="text-gray-400" onClick={() => setIsOpen(false)}>Notifications</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
