"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
const HERO_DATA = [
    {img: "/images/Hero.png", title: "Office That Fit You", desc:"Coworking & Flexible Office Marketplace | Search & Book Today" },
    {img: "/images/Hero.png", title: "Co Working Spaces Fits You", desc:"Coworking & Flexible Office Marketplace | Search & Book Today" }
]

const tabs = [
    { name: "Shared Space", icon: "👥" },
    { name: "Private Offices", icon: "🏢" },
    { name: "Meeting Rooms", icon: "🤝" },
    { name: "Dedicated Desk", icon: "🖥️" },
  ];
export default function Hero() {
const [activeTab, setActiveTab] = useState("Shared Space");
  return (<>
    <section className="relative w-full max-w-[85%] mx-auto h-[80vh] overflow-hidden rounded-3xl mt-0">
        <Swiper 
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
            }}
            spaceBetween={0}
            loop={true}
        >
            {HERO_DATA.map((item) =>
                <SwiperSlide key={item.title} className=" h-[80vh] overflow-hidden"> 
                    
                    <div className="h-screen">
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            priority
                            className="object-cover h-screen"
                        />
                        {/*  الطبقة الشفافة (Overlay) لإظهار النص بوضوح */}
                        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 to-black/60" />

                        {/*  المحتوى النصي */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-start text-center px-6 pt-20 text-white">
                            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#F8E9D9] text-center ">
                            {item.title}
                            </h1>
                            <p className="text-xs font-semibold md:text-base lg:text-lg xl:text-2xl center w-[50%] mx-auto mt-3">
                            {item.desc}
                            </p>

                            {/* خط صغير تحت العنوان مثل الموجود في الصورة */}
                            {/* <div className="w-24 h-1 bg-white/50 mt-6 rounded-full" /> */}
                        </div>
                    </div>
                </SwiperSlide> 
            )}
        </Swiper>
    </section>
    <section className="bg-[#fffaf5] pb-8 rounded-[40px] shadow-sm w-full max-w-[70%]  mx-auto relative bottom-22 z-10 left-[35%] -translate-x-[50%]">
      {/* Container الأزرار */}
      <div className="flex flex-wrap gap-3 mb-6 py-4 bg-[#ffffff] rounded-t-[40px]">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center justify-center cursor-pointer mx-auto w-[22%] gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
              ${
                activeTab === tab.name
                  ? "bg-[#B2C2B2] text-[#3D5A2B] shadow-inner" // اللون المختار
                  : "bg-black/5 text-gray-500 "  // العادي
              }`}
          >
            <span>{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* شريط البحث السفلي */}
      <div className="flex items-center mx-5 rounded-2xl   border-none">
        <div className="flex items-center flex-1 gap-2  bg-[#ffffff] mr-9 p-0 rounded-2xl px-5">
          <BiSearch className="text-blue-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full bg-transparent outline-none text-gray-600 placeholder:text-gray-300 py-3"
          />
        </div>
        
        <button className="bg-[#3D5A2B] hover:bg-[#2D431F] text-white px-10 py-3 rounded-xl font-bold transition-colors">
          Search
        </button>
      </div>
    </section>
 </> );
}