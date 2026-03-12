import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import UniversalCard from './UniversalCard';
import { CardData } from '@/types/carttype';

const listings:CardData[] = [
  {
    id: 1,
    title: "Shared Coworking Spaces",
    type: "Shared Area",
    price: "17.25 SAR",
    Review:4,
    unit: "/Hour",
    capacity: "22 Person",
    status: "Available",
    image: "/images/shared.jpg", // استبدلها بمسار صورك
    description: "Stop going to Coffee shops to accomplish your work, they are always crowded and noisy,",
  }

];
export default function Shared() {
  return (<>
      <section className="bg-white py-10">
        <div className="w-full max-w-[85%] mx-auto  ">
            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className='text-[30px] font-bold'>Shared Area In Jeddah</h2>
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
