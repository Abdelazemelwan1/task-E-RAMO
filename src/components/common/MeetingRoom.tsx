import React from 'react'
import { IoIosArrowForward, IoIosStar } from 'react-icons/io'
import Image from 'next/image';
import { HiOutlineUsers, HiOutlineClock } from 'react-icons/hi'; // تأكد من تثبيت react-icons
import { MdOutlineChevronRight } from 'react-icons/md';
import { IoHeartCircleOutline } from 'react-icons/io5';
import { FaShare } from 'react-icons/fa';
import { TbShare3 } from 'react-icons/tb';
import { LuHeart } from 'react-icons/lu';
import { BiDockTop } from 'react-icons/bi';
import UniversalCard from './UniversalCard';

const listings = [
  {
    id: 1,
    title: "Small Meeting Room",
    type: "Meeting Room",
    Review:0,
    price: "57.50 SAR",
    unit: "/Hour",
    capacity: "4 Person",
    status: "Available",
    image: "/images/Latest 1.jpeg", // استبدلها بمسار صورك
    description: "A cozy, quiet space designed for focused studying or small meetings. This room comfortably seats ....",
  },
  {
    id: 2,
    title: "Lecture Room",
    type: "Meeting Room",
    Review:0,
    price: "230.00 SAR",
    unit: "/Month",
    capacity: "130 Person",
    status: "Available",
    image: "/images/meeting2.jpg", // استبدلها بمسار صورك
    description: "Interactive sessions are the perfect way of delivering a lecture, Enjoy our Lecture room ...",
  },
  {
    id: 3,
    title: "Master Meeting Room",
    type: "Meeting Room",
    Review:0,
    price: "138.00",
    unit: "/Month",
    capacity: "12 Person",
    status: "Available",
    image: "/images/meeting3.jpg", // استبدلها بمسار صورك
    description: "If you fail to plan, so you are planning to fail, It's all about good planning, Enjoy our...",
  },
  {
    id: 4,
    title: "Luxury Meeting Room",
    type: "Meeting Room",
    Review:0,
    price: "172.50 SAR",
    unit: "/Hour",
    capacity: "8 Person",
    status: "Available",
    image:  "/images/meeting4.jpg", // استبدلها بمسار صورك
    description: "Creativity and brainstorming meeting room with 8 person capacity, Enjoy your ultima...",
  }
];
export default function MeetingRoom() {
  return (<>
      <section className="bg-[#f5f5f5] py-10">
        <div className="w-full max-w-[85%] mx-auto  ">
            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className='text-[30px] font-bold'>Meeting Room In Jeddah</h2>
                    <p className='text-md mt-1 '>Check our latest listings</p>
                </div>
                <p className='capitalize text-md flex items-center gap-2  cursor-pointer'>
                    show More 
                    <span className="inline-block animate-move-right">
                        <IoIosArrowForward />
                    </span>
                </p>
            </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full max-w-[85%] mx-auto">
{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-50"> */}
      {listings.map((item) => (<UniversalCard  key={item.id} data={item} />
       
      ))}
    </div>
        {/* </div> */}
      </section>

  </>
  )
}
