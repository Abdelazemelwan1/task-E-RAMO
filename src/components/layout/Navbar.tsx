"use client";
import React, {  useState } from 'react';
import {Link} from '@/i18n/navigation';
// import { usePathname } from 'next/navigation';
import { usePathname } from '@/i18n/navigation';
// import { ChevronDown, Globe } from 'lucide-react';
import Image from 'next/image';
import { FiHome, FiPhoneIncoming } from 'react-icons/fi';
import { BiBuildings, BiLogInCircle, BiNews, BiUserPlus } from 'react-icons/bi';
import { FaDesktop } from 'react-icons/fa';
import {  MdWorkOutline } from 'react-icons/md';
import { LuBookText } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
// import Link from 'next/link';
import LanguageChanger from '../common/LanguageChanger';

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("NavBar")
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t("Home"), icon: <FiHome />, path: '/' },
    { name: t('About'), icon: <BiBuildings />, path: '/about' },
    { name: 'Products', icon: <FaDesktop />, path: '/products', hasSub: true },
    { name: 'How It Works', icon: <MdWorkOutline />, path: '/how-it-works' },
    { name: 'Membership', icon: <LuBookText />, path: '/membership' },
    { name: 'Blogs', icon: <BiNews />, path: '/blogs' },
    { name: 'Contact Us', icon: <FiPhoneIncoming />, path: '/contact' },
  ];
  const acount = [
    { name: 'create Account', icon: <BiUserPlus />, path: '/' },
    { name: 'login', icon: <BiLogInCircle />, path: '/about' },
   
  ];

  return (
    <nav className="w-full bg-white py-3 shadow-sm sticky top-0 z-[1000]">
      <div className="max-w-[90%] xl:max-w-[85%]  mx-auto flex items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={100} 
              height={45} 
              className="h-[45px] w-auto flex xl:flex lg:hidden"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-4 m-0 p-0 list-none">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index} className="relative group">
                <Link 
                  href={item.path} 
                  className={`flex items-center gap-1 py-2.5 text-[14px] font-bold transition-colors duration-300
                    ${isActive ? 'text-[#3d5a2d]' : 'text-[#001f3f] hover:text-[#3d5a2d]'} `}
                >
                  {item.name}
                  {/* {item.hasDropdown && <ChevronDown size={14} className="mt-0.5" />} */}
                  
                  {/* Underline Effect */}
                  <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#3d5a2d] rounded-sm transition-transform duration-400 ease-[cubic-bezier(0.5,1,0.89,1)] origin-center
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1.5 bg-white border-[1.5px] border-[#3d5a2d] px-4 py-[7px] rounded-lg text-[#3d5a2d] font-bold cursor-pointer transition-all hover:bg-[#f8fbf7]">
            {/* <Globe size={18} /> */}
            <span className="text-[14px] -mt-0.5">العربية</span>
          </button>
          <LanguageChanger />
          
          <Link href="/create-account" className="hidden sm:block">
            <button className="bg-[#3d5a2d] text-white border-none px-[22px] py-2.5 rounded-lg font-bold text-[14px] cursor-pointer transition-colors hover:bg-[#2d4321]">
              Create Account
            </button>
          </Link>
          
          <Link href="/login">
            <button className="bg-transparent border-[1.5px] border-[#3d5a2d] text-[#3d5a2d] px-[22px] py-2 rounded-lg font-bold text-[14px] cursor-pointer transition-all hover:bg-[#3d5a2d] hover:text-white">
              Login
            </button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Image  alt='icon' src="/images/mobile.svg" width={100} height={100} className='w-8 cursor-pointer' onClick={() => setIsOpen(true)}/> 
        
        </div>
<div 
        className={`fixed inset-0 z-[40] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)} // إغلاق عند الضغط على أي مكان غامق
      />

      {/* --- السايد بار (Sidebar) --- */}
      <aside 
        className={`fixed top-0 right-0 z-[50] rounded-tl-[30px] rounded-bl-[30px] h-full w-[280px]   bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* محتوى السايد بار من الداخل */}
        <div className="p-3 py-7 flex flex-col gap-4">
          {/* <button 
            className="text-gray-500 text-2xl mb-8"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button> */}
          {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-center border-b-1 pb-2">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={100} 
              height={45} 
              className="h-[45px] w-auto flex xl:flex lg:hidden"
            />
          </Link>
        </div>
        <button className="flex items-center justify-center w-full gap-1.5 bg-white border-[1.5px] border-[#3d5a2d] px-4 py-[7px] rounded-lg text-[#3d5a2d] font-bold cursor-pointer transition-all hover:bg-[#f8fbf7]">
            {/* <Globe size={18} /> */}
            <span className="text-[14px] -mt-0.5">العربية</span>
          </button>
          
          <nav className="flex flex-col gap-6">
             {/* Navigation Links */}
        <ul className="flex flex-col  gap-1 m-0 p-0 list-none">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index} className="relative group">
                <Link  onClick={() => setIsOpen(false)}
                  href={item.path} 
                  className={`flex items-center gap-1 text-[#001f3f] hover:text-[#3d5a2d]  hover:bg-[#3d5a2d6e] px-2 py-2.5 text-[14px] font-semibold transition-colors duration-300
                    `}
                >
                  <span>{item.icon}</span>{item.name}
                 
                </Link>
              </li>
            );
          })}
          {acount.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index} className="relative group">
                <Link  onClick={() => setIsOpen(false)}
                  href={item.path} 
                  className={`flex items-center gap-1 text-[#001f3f] hover:text-[#3d5a2d]  hover:bg-[#3d5a2d6e] px-2 py-2.5 text-[14px] font-bold transition-colors duration-300
                    `}
                >
                  <span>{item.icon}</span> {item.name}
                 
                </Link>
              </li>
            );
          })}
        </ul>
            {/* <a  onClick={() => setIsOpen(false)}  href="#" className="font-bold text-gray-700 hover:text-cyan-500">Home</a>
            <a href="#" className="font-bold text-gray-700 hover:text-cyan-500">About</a>
            <a href="#" className="font-bold text-gray-700 hover:text-cyan-500">Products</a>
            <a href="#" className="font-bold text-gray-700 hover:text-cyan-500">Contact</a> */}
          </nav>
        </div>
      </aside>

      </div>
    </nav>
  );
};

export default Navbar;

