import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import UniversalCard from './UniversalCard';
import { CardData } from '@/types/carttype';

const listings:CardData[] = [
  {
    id: 1,
    title: "01 Dedicated desk",
    type: "dedicated disk",
    Review:0,
    price: "75.00 SAR",
    unit: "/Day",
    capacity: "1 Person",
    status: "Available",
    image: "/images/Latest 1.jpeg", // استبدلها بمسار صورك
    description: "Our dedicated desk offers professional,private,permanent workspace within our shared-area",
  },
  {
    id: 2,
    title: "02 Dedicated desk",
    type: "dedicated disk",
    Review:0,
    price: "75.00 SAR",
    unit: "/Day",
    capacity: "1 Person",
    status: "Available",
    image: "/images/Latest 2.jpg", // استبدلها بمسار صورك
    description: "Our dedicated desk offers professional,private,permanent workspace within our shared-area",
  },
  {
    id: 3,
    title: "03 Dedicated desk",
    type: "dedicated disk",
    Review:0,
    price: "75.00",
    unit: "/Day",
    capacity: "1 Person",
    status: "Available",
    image: "/images/Latest 3.jpg", // استبدلها بمسار صورك
    description: "Our dedicated desk offers professional,private,permanent workspace within our shared-area",
  },
  {
    id: 4,
    title: "04 Dedicated desk",
    type: "dedicated disk",
    Review:0,
    price: "75.00 SAR",
    unit: "/Day",
    capacity: "1 Person",
    status: "Not Available",
    image:  "/images/Latest 4.jpg", // استبدلها بمسار صورك
    description: "Our dedicated desk offers professional,private,permanent workspace within our shared-area",
  }
];
export default function Dedicated() {
  return (<>
      <section className="bg-[#f5f5f5] py-10">
        <div className="w-full max-w-[85%] mx-auto  ">
            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className='text-[30px] font-bold'>Dedicated Desk In Jeddah</h2>
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
