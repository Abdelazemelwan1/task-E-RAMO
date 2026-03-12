import { WorkStep } from '@/types/carttype'
import Image from 'next/image'
import React from 'react'

const Data_Work:WorkStep[] = [
    {
        id: 1,
        title:"Book, Reach or Call",
        describ : "Search on your beloved office that fits your needs, then book it..",
        img: "/images/work1.jpg"
    },
    {
        id: 2,
        title:"Office That Fit You",
        describ : "You can choose from many varieties the office that fits your needs.",
        img: "/images/work2.jpg"
    },
    {
        id: 3,
        title:"Book your Coworking space",
        describ : "Book your Coworking space in modern place.",
        img: "/images/work3.jpg"
    },
]

export default function Works() {
  return (<>
        <section className="max-w-[85%] mx-auto relative   rounded-3xl p-8 mt-28">
            <div className="w-full max-w-[85%] mx-auto  ">
                <div className="text-center">
                    <h2 className='text-[30px] font-semibold'>How It Works</h2>
                    <p className='text-md mt-1 '>Coworking & Flexible Office Marketplace | Search & Book Today</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-9">
                {Data_Work.map((item) => <div key={item.id} className="hover:scale-110 transition-all duration-500 ">
                    <h3 className='flex items-center gap-2 text-[15px] font-medium mb-4'><span className='w-7 h-7 bg-[#e7caaa] rounded-full text-xl flex items-center justify-center'>{item.id}</span>{item.title}</h3>
                    {/* <div className="rounded-2xl"> */}
                        <Image src={item.img} alt='jkuf' width={100} height={100} className='w-full h-45 rounded-2xl object-cover'/>
                    {/* </div> */}
                    <p className='mt-3 text-center text-sm text-black/45'>{item.describ}</p>
                </div>)}
            </div>
        </section>
    </>)
}
