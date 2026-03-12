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
    price: "75.00 SAR",
    unit: "/Hour",
    capacity: "4 Person",
    status: "Available",
    image: "/images/Latest 1.jpeg", // استبدلها بمسار صورك
    description: "A cozy, quiet space designed for focused studying or small meetings. This room comfortably seats ....",
  },
  {
    id: 2,
    title: "Lawyer Private Office 01",
    type: "Private Office",
    Review:0,
    price: "2,799.00 SAR",
    unit: "/Month",
    capacity: "1 Person",
    status: "Available",
    image: "/images/Latest 2.jpg", // استبدلها بمسار صورك
    description: "Being Lawyer is a very critical job, your clients need quiet private office to confess and to exp...",
  },
  {
    id: 3,
    title: "Triple or Quadrable private",
    type: "Private Office",
    Review:0,
    price: "57.50",
    unit: "/Month",
    capacity: "3 Person",
    status: "Not Available",
    image: "/images/Latest 3.jpg", // استبدلها بمسار صورك
    description: "Our dedicated desk offers professional,private,permanent workspace within our shared-area",
  },
  {
    id: 4,
    title: "01 Dedicated desk",
    type: "dedicated disk",
    Review:0,
    price: "75.00 SAR",
    unit: "/Hour",
    capacity: "1 Person",
    status: "Available",
    image:  "/images/Latest 4.jpg", // استبدلها بمسار صورك
    description: "A cozy, quiet space designed for focused studying or small meetings...",
  }
];
export default function Latest() {
  return (<>
      <section className="bg-[#f5f5f5] py-10">
        <div className="w-full max-w-[85%] mx-auto  ">
            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className='text-[30px] font-bold'>Latest Listings In Jeddah</h2>
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
