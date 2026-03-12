import Image from 'next/image';
import React from 'react'
import { FaCheck } from 'react-icons/fa';

export default function AboutLoction() {
    const image_About = [
        {img:  "/images/about1.jpg", id:1},
        {img:  "/images/about2.jpg", id:2},
        {img:  "/images/about3.jpg", id:3}
    ];
    const desc_About = [
        {id: 1 ,icon: <FaCheck />, desc: 'We Offer All Amenities in Our All Location'},
        {id: 2 ,icon: <FaCheck /> , desc: 'All Kinds Of Support 24/7'},
        {id: 3 ,icon: <FaCheck /> , desc: 'Choose from 40 Offices'}
    ]
  return (<>
  <section className='grid xl:grid-cols-2 gap-6 w-full max-w-[85%] mx-auto'>
    <div className="">
        <h2 className='text-[#000000] text-[30px] font-bold'>About Chair Location</h2>
        <p className='text-[15px]'>Chair location is a website/mobile app where you can search, find and reserve co-working space, including co-working offices, private offices, meeting rooms, and virtual offices in Jeddah near you.</p>
        <h3 className='text-xl my-3'>How Chair Location Works</h3>
        <p><span className='font-bold text-[15px]'>Chair Location</span> is a platform designed to connect individuals and businesses looking for flexible workspaces with providers of these spaces. Think of it as a digital marketplace where you can browse, compare, and book the space that perfectly suits your needs.</p>
        <h4 className='text-lg py-2.5'>The Search and Booking Process</h4>
        <p className='text-[15px]'><span className='font-bold'> Search:</span> Your experience begins by searching for coworking spaces in Jeddah or any other city the platform supports.</p>
        <p className='text-[15px]'><span className='font-bold'> Browse and Compare:</span> A list of available spaces matching your search will appear.</p>
        <p className='text-[15px]'><span className='font-bold'> Book:</span> Once youve chosen the right space, the platform offers a simple and direct booking process.</p>
        <h2 className='text-lg font-bold mt-3'>Who is Chair Location For?</h2>
        <p className='text-[15px]'><span className='font-bold'> Freelancers and Entrepreneurs:</span> Who need a professional work environment away from home.</p>
        <p className='text-[15px]'><span className='font-bold'> Startups:</span> Looking for flexibility and lower operational costs compared to traditional offices.</p>
        <p className='text-[15px]'><span className='font-bold'> Small Teams:</span> Who need a place to meet or work on specific projects.ness Travelers: Who require a place to work while in Jeddah.</p>
        <p className='text-[15px]'>In short, <span className='font-bold'> Chair Location</span> acts as a bridge, quickly and easily connecting you to the space you need to work effectively in Jeddah.</p>
        <h2 className='font-semibold text-2xl my-5'>Why Chair Location</h2>
        {desc_About.map((item) => <div key={item.id} className="flex gap-2 items-center my-3">
                <span className='bg-[#e7caaa] w-8 h-8 rounded-full flex items-center justify-center'>{item.icon}</span>
                <p>{item.desc}</p>
            </div>
        )}
        <div className="flex gap-4 py-3 bg-white">
      {/* الزر الأبيض (Contact Us) */}
      <button className="px-10 py-3 border border-[#3D5A2B] text-[#3D5A2B] bg-white rounded-xl font-semibold transition-all duration-300 hover:bg-[#3D5A2B] hover:text-white">
        Contact Us
      </button>

      {/* الزر الأخضر (Book Now) */}
      <button className="px-10 py-3 border border-[#3D5A2B] bg-[#3D5A2B] text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-[#3D5A2B]">
        Book Now
      </button>
    </div>
    </div>
    <div className="flex flex-col gap-3 rounded-2xl w-full">
        {/* <Image src={image_About[0].img} alt='jhg' width={100} height={100} className='w-full object-contain'/> */}
        {/* <div className="w-full"> */}

         {image_About.map((item) => 
        <div key={item.id} className="relative w-full h-45 rounded-2xl ">
        <Image  src={item.img} alt='image-about' fill className='w-full rounded-2xl object-cover'/></div>
        )}
       
    </div>
  </section>
  </>)
}
