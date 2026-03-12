import { WorkStep } from '@/types/carttype'
import Image from 'next/image'
import React from 'react'

const Data_Chair:WorkStep[] = [
    {
        id: 1,
        title:"Shared Area Places",
        describ : "A shared area in Jeddah in Chair Location Co-Working space is a communal workspace or facility designed for use by multiple members, rather than being assigned to a single person or team.",
        img: "/images/Chair1.jpg"
    },
    {
        id: 2,
        title:"Dedicated Desk",
        describ : "Our dedicated desks in Chair Location branch in Jeddah is a desk in a communal office space that's set aside just for you for a certain length of time. It's a flexible workspace option somewhere between private office or luxury offices.",
        img: "/images/Chair2.jpg"
    },
    {
        id: 3,
        title:"Offices for rent",
        describ : "If you need to work privately in your own office with your employees without the hassle of operating, a private office would be a great option to rent your office with us in Chair Location.",
        img: "/images/Chair3.jpg"
    },
]

export default function Chairlocation() {
  return (<>
        <section className="max-w-[85%] mx-auto relative   rounded-3xl p-8 mt-28">
            <div className="w-full max-w-[85%] mx-auto  ">
                <div className="text-center">
                    <h2 className='text-[30px] font-semibold'>Chair Location Coworking space for you</h2>
                    <p className='text-sm mt-1 '>Chair Location Coworking space offers you the freedom to work closer to clients, colleagues or home. It's also greener and more cost-effective. With over 40 luxury offices, nobody is better placed than Chair Location to help you make the best of it.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-20 mt-9">
                {Data_Chair.map((item) =><div key={item.id} className="relative  rounded-3xl overflow-hidden group cursor-pointer">
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={100}
                        height={100}
                        
                        className="w-full h-full object-cover "
                    />

                    {/* الطبقة الشفافة (Overlay) - تظهر فقط عند الهوفر */}
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h2 className="text-white text-xl font-bold mb-4 ">
                        {item.title}
                        </h2>
                        <p className="text-white text-sm leading-4.5">
                            {item.describ}
                        </p>
                    </div>
                 </div>)}
            </div>
        </section>
    </>)
}
