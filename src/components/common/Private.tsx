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
    title: "Lawyer Private Office 01",
    type: "Private Office",
    Review:0,
    price: "2.799.00 SAR",
    unit: "/Hour",
    capacity: "1 Person",
    status: "Available",
    image: "/images/Latest 2.jpg", // استبدلها بمسار صورك
    description: "Being Lawyer is a very critical job, your clients need quiet private office to confess and to exp...",
  },
  {
    id: 2,
    title: "Triple or Quadrable private office",
    type: "Private Office",
    Review:0,
    price: "6,499.00 SAR",
    unit: "/Month",
    capacity: "3 Person",
    status: "Not Available",
    image: "/images/Latest 3.jpg", // استبدلها بمسار صورك
    description: "If you need to have your own office but can't afford the high rent costs, Enjoy our private...",
  },
  {
    id: 3,
    title: "03 Double private office",
    type: "Private Office",
    Review:0,
    price: "3,799.00",
    unit: "/Month",
    capacity: "2 Person",
    status: "Not Available",
    image: "/images/private3.jpg", // استبدلها بمسار صورك
    description: "Our dedicated desk offers professional,private,permanent workspace within our shared-area",
  },
  {
    id: 4,
    title: "05 Double private office",
    type: "Private Office",
    Review:0,
    price: "3,799.00 SAR",
    unit: "/Hour",
    capacity: "2 Person",
    status: "Not Available",
    image:  "/images/private4.jpg", // استبدلها بمسار صورك
    description: "If you need to have your own office but can't afford the high rent costs, Enjoy our private...",
  }
];
export default function Private () {
  return (<>
      <section className="bg-white py-10">
        <div className="w-full max-w-[85%] mx-auto  ">
            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className='text-[30px] font-bold'>Private Office In Jeddah</h2>
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
