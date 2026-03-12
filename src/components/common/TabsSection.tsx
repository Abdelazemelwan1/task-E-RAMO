"use client"; // ضروري لأننا نستخدم useState
import { useState } from 'react';
import Image from 'next/image';
import { BiBriefcase, BiLayout } from 'react-icons/bi';
import { TabContent } from '@/types/carttype';
import { MdOutlineDiscount } from 'react-icons/md';
export default function TabsSection() {
  const tabsData :TabContent[] = [
    {
      id: 1,
      label: "Shared Area",
      icon: <BiLayout />, // يمكنك استخدام أي أيقونة
      title: "Shared Coworking Spaces",
      subtitle: "((Shared Area))",
      description: ["Stop going to Coffee shops to accomplish your work, they are always crowded and noisy. ", "Work environment and vibes are the key success facto..."],
      amenities: ["Commercial license", "High Speed Internet", "Major Street", "Business Hub", "Transportation"],
      price: "17.25",
      unit: "/Hour",
      image: "/images/shared.jpg"
    },
    {
      id: 2,
      label: "Private Offices",
      icon: <BiBriefcase />,
      title: "Lawyer Private Office 01",
      subtitle: "((Private Office))",
      description: ["Being Lawyer is a very critical job, your clients need quiet private office to confess and to explain exactly what happened to allow you protect th..."],
      amenities: ["Free Hot Drink", "Landline", "Modern Furniture", "Parking" , "Luxury Benefits" , "Storage" , "WIFI"],
      price: "2,799.00",
      unit: "/Month",
      image: "/images/Latest 2.jpg"
    },
    {
      id: 3,
      label: "Meeting Rooms",
      icon: <BiBriefcase />,
      title: "Small Meeting Room",
      subtitle: "((Meeting Room))",
      description: ["A cozy, quiet space designed for focused studying or small meetings. This room comfortably seats up to four people and is equipped with a table, er..."],
      amenities: ["Quite Area"],
      price: "57.50",
      unit: "/Month",
      image: "/images/Latest 1.jpeg"
    },
    {
      id: 4,
      label: "Meeting Rooms",
      icon: <BiBriefcase />,
      title: "01 Dedicated desk",
      subtitle: "((Dedicated Desk))",
      description: ["Our dedicated desk offers professional,private,permanent workspace within our shared-area which provides a designated desk, with ergonomic furnitur..."],
      amenities: ["Good community" , "hot drinks" , "wifi"],
      price: " 75.00",
      unit: "/Day",
      image: "/images/Latest 4.jpg"
    },
    // أضف بقية الأقسام (Meeting Rooms, Dedicated Desk) بنفس الطريقة
  ];
  const [activeTab, setActiveTab] = useState(tabsData[0]);

  return (
    <section className="max-w-[85%] mx-auto relative  bg-[#fdfaf5] rounded-3xl p-8 mt-28">
      
      {/* 1. Tabs Navigation (الأزرار العلوية) */}
      <div className="flex justify-center mb-12 w-full absolute -top-9 left-[50%] -translate-x-[50%]">
        <div className="flex bg-[#2d4a2a] p-2 rounded-full gap-2  overflow-x-auto no-scrollbar">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`  max-lg:flex-col flex items-center justify-center text-center gap-2 px-2 md:px-6 py-2 rounded-2xl md:rounded-full transition-all duration-300 text-sm font-medium ${
                activeTab.id === tab.id 
                ? "bg-white text-[#2d4a2a] shadow-md" 
                : "text-white/80 hover:bg-white/10"
              }`}
            >
              <span className="text-lg text-center">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Dynamic Content (المحتوى المتغير) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Info */}
        <div className="space-y-6 py-5">
          <div className="space-y-2">
            <h4 className="text-lg font-bold uppercase tracking-widest text-gray-500 "><span className='border border-t-0 border-r-0 border-l-0 border-b-black pb-1'>Latest</span> Listings</h4>
            <p className="text-md text-black">Check Our Latest Listings</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-gray-900">{activeTab.title}</h2>
            <p className="text-2xl font-semibold text-gray-700">{activeTab.subtitle}</p>
          </div>
          <div className="">
            {activeTab.description.map((item , index) => (
                    <p key={index} className="text-gray-500 leading-relaxed text-sm">
                        {item}
                    </p>
            ))}
        </div>
          <div className="space-y-2 pb-0 mb-2">
            <h5 className="font-bold text-gray-400 text-sm">Amenities :</h5>
            <ul className="grid grid-cols-1 gap-2 ">
              {activeTab.amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-black">
                  <span className="w-2 h-2 bg-[#d1a272] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[25%] border-b border-black/20 pt-0"></div>

          <div className="flex items-center gap-2 py-2"> 
             <span className="text-[#2d4a2a] flex items-center gap-2"> <MdOutlineDiscount />
 Price Starting From <span className='font-bold'>{activeTab.price} SAR</span> </span>
             <span className="text-gray-400 text-xs">{activeTab.unit}</span>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#2d4a2a] text-white px-10 py-3 rounded-lg font-bold hover:bg-[#1e331c] transition">
              Book Now
            </button>
            <button className="border border-[#2d4a2a] text-[#2d4a2a] px-10 py-3 rounded-lg font-bold hover:bg-[#2d4a2a] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[350px] w-full rounded-3xl overflow-hidden shadow-lg">
          <Image 
            src={activeTab.image} 
            alt={activeTab.title} 
            fill 
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}