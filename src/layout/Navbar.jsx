import React from 'react'
import { Link } from 'react-router-dom'
import appLogo from '../assets/homelogo.png'
import notificationIcon from '../assets/notification.png'
import chatIcon from '../assets/chat.png'
import homeIcon from '../assets/homeicon.png'
import avatar from '../assets/avatar.png'
import SearchCommon from '../components/common/SearchCommon'
const Navbar = () => {
    return (
        <nav className="bg-white p-3 flex items-center justify-between">
            <div className='flex gap-3 items-center'>
                <div >
                    <img src={appLogo} alt="Logo" />
                </div>
                <SearchCommon/>
            </div>

            <div className='flex gap-4'>
                <div className='flex-1' >
                    <ul className="flex gap-7">
                        <li className='flex flex-col gap-1 justify-center items-center'>
                            <img src={homeIcon} alt="home icon" />
                            <Link to="/groups" className="block text-[#2540AC] hover:bg-gray-200">Home</Link></li>
                        <li className='flex flex-col gap-1 justify-center items-center'>
                            <img src={chatIcon} alt="home icon" />
                            <Link to="/people" className="block text-gray-400 hover:bg-gray-200">Chat</Link></li>
                        <li className='flex flex-col gap-1 justify-center items-center'>
                            <img src={notificationIcon} alt="home icon" />
                            <Link to="/services" className="block text-gray-400 hover:bg-gray-200">Notification</Link></li>
                    </ul>
                </div>
                <div className='border border-gray-200 py-1.5'></div>
                <div className="flex items-center gap-2">
                    <div>
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div>
                        <h6>Beyoncé</h6>
                        <p className='text-gray-400'>Prime Helper</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
