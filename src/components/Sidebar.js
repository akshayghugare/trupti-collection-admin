// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine, RiUserSettingsLine, RiHome2Line, RiInformationLine,RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const [isMensTopWearSubMenuOpen, setIsMensTopWearSubMenuOpen] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'menstopwear') {
            setIsMensTopWearSubMenuOpen(!isMensTopWearSubMenuOpen);
        } else {
            setIsMensTopWearSubMenuOpen(false);
        }
    };

    return (
        <div className={`bg-gray-800 text-white h-screen ${isCollapsed ? 'w-20' : 'w-72'} p-4 flex flex-col justify-between transition-all duration-300`}>
            <div>
                <div className='flex justify-between items-center'>
                    <div className={`text-xl font-semibold  ${isCollapsed ? 'hidden' : 'block'}`}>
                        {isCollapsed ? null : 'TRUPTI-COLLECTION'}
                    </div>
                    <div className=''>
                        {/* Collapse button */}
                        <button
                            onClick={toggleCollapse}
                            className="text-white focus:outline-none hover:text-gray-500 transition"
                        >
                            {isCollapsed ? <FaBars className='ml-4'/> : <FaBars />}
                        </button>
                    </div>
                </div>

                <ul className="pl-2 mt-4 flex flex-col gap-2">
                    <li>
                        <Link
                            to="/home"
                            className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 hover:text-black transition duration-300 ${activeTab === 'home' ? 'bg-gray-200 text-black' : ''}`}
                            onClick={() => handleTabClick('home')}
                        >
                            <RiHome2Line />
                            {isCollapsed ? null : 'Home'}
                        </Link>
                    </li>
                    <li>
                        <div className="relative">
                            <div
                                className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 hover:text-black transition duration-300 ${activeTab === 'menstopwear' ? 'bg-gray-200 text-black' : ''}`}
                                onClick={() => handleTabClick('menstopwear')}
                            >
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <RiHome2Line />
                                        {isCollapsed ? null : 'Mens top wear'}
                                    </div>
                                      {isMensTopWearSubMenuOpen? <RiArrowDropUpLine className='text-2xl'/>:<RiArrowDropDownLine className='text-2xl'/>}
                                </div>
                            </div>
                            {isMensTopWearSubMenuOpen && (
                                <ul className=" mt-2 bg-gray-700 p-2 rounded-md">
                                    <li>
                                        <Link to="/men-top-wear/t-shirt" className="text-white hover:text-gray-500" >
                                            T-shirt
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/men-top-wear/casual" className="text-white hover:text-gray-500">
                                            Casual
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/men-top-wear/formal" className="text-white hover:text-gray-500">
                                            Formal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/men-top-wear/full-kurta" className="text-white hover:text-gray-500">
                                            Full Kurta
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/men-top-wear/short-kurta" className="text-white hover:text-gray-500">
                                            Short Kurta
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 hover:text-black transition duration-300 ${activeTab === 'about' ? 'bg-gray-200 text-black' : ''}`}
                            onClick={() => handleTabClick('about')}
                        >
                            <RiInformationLine />
                            {isCollapsed ? null : 'About'}
                        </Link>
                    </li>
                </ul>

            </div>

            <div className="mb-4">
                {/* Settings */}
                <div className="flex justify-between items-center">
                    <Link to="/profile" className="flex items-center">
                        <RiUserSettingsLine className="mr-2" />
                        {isCollapsed ? null : 'Profile'}
                    </Link>
                    <Link to="/logout" className="flex items-center">
                        <RiLogoutBoxLine className="mr-2" />
                        {isCollapsed ? null : 'Logout'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
