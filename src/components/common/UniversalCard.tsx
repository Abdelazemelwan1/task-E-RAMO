"use client";
import { useLocale } from 'next-intl';
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from 'react-icons/io'
import Image from 'next/image';
import { HiOutlineUsers } from 'react-icons/hi'; // تأكد من تثبيت react-icons
import { TbShare3 } from 'react-icons/tb';
import { LuHeart } from 'react-icons/lu';
import { BiDockTop } from 'react-icons/bi';
import { CardData } from '@/types/carttype';
import { AiOutlineEye } from 'react-icons/ai';
interface Props {
  data: CardData;
}
export default function UniversalCard({ data }: Props) {
  const locale = useLocale();
  return (
   <div key={data.id} className="rounded-xl mt-8 shadow-sm border border-gray-100 overflow-hidden flex flex-col">
             
             {/* Image Section */}
             <div className="relative h-48 w-full group cursor-pointer overflow-hidden">
               <Image 
                 src={data.image} 
                 alt={data.title} 
                 fill 
                 className="object-cover p-1 rounded-xl "
               />
                <div className="absolute inset-1 rounded-xl bg-green-950/45 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-600 ease-in-out z-10">
                  {/* أيقونة العين في المنتصف */}
                  <AiOutlineEye className="text-white text-4xl" />
                </div>
            
               <div className={`absolute top-0 left-0 px-10 py-1 -rotate-45 -translate-x-8 translate-y-6 text-center flex items-center justify-center text-xs font-bold  shadow-md ${
                 data.status === 'Available' ? 'bg-[#a7bc9d] text-black' : 'bg-[#ae5b5b]  text-white'
               }`}>
                 {data.status}
               </div>
               
               {/* Floating Buttons */}
               <div className="absolute top-3 right-3 flex gap-2">
                 <button className="p-2 bg-white rounded-full shadow-sm hover:bg-[#a7bc9d] hover:text-white transition-all duration-500 ease-in-out"><TbShare3 /></button>
                 <button className="p-2 bg-white rounded-full shadow-sm hover:bg-red-600 hover:text-white transition-all duration-500 ease-in-out"><LuHeart /></button>
               </div>
             </div>
   
             {/* Content Section */}
             <div className="p-4 px-2.5 flex flex-col flex-grow">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-[12px] font-bold capitalize tracking-wider text-black/50 bg-[#f4f1ed] px-2 py-0.5 rounded">
                   {data.type}
                 </span>
                 <div className="flex items-center text-xs text-gray-500">
                   <span className="text-yellow-500 mr-1"><IoIosStar /></span> {data.Review} (Review)
                 </div>
               </div>
   
               <h3 className="font-bold text-gray-800 mb-2 truncate">{data.title}</h3>
               <p className="text-sm text-gray-500/70 line-clamp-3 mb-4 leading-5.5">
                 {data.description}
               </p>
   
               {/* Icons Info */}
               <div className="flex items-center justify-between text-gray-500 text-xs mt-auto pb-4 border-b border-gray-200">
                 <div className="flex items-center gap-1">
                   <HiOutlineUsers className="w-4 h-4" />
                   <span>{data.capacity}</span>
                 </div>
                 <div className="flex items-center gap-1">
                   <BiDockTop className="w-4 h-4 " />
                   <span className=" font-medium">Open</span>
                 </div>
               </div>
   
               {/* Footer Price */}
               <div className="flex items-center justify-between pt-4">
                 <div className='flex items-center'>
                   <p className="text-[13px] text-gray-400 font-semibold capitalize"> {locale === "ar" ? "يبدأ من:" : "Starts From:"} </p>
                   <p className="text-sm font-bold text-gray-800">
                     {data.price} <span className="text-gray-400 font-normal text-xs">{data.unit}</span>
                   </p>
                 </div>
                 
                   <span className="inline-block animate-move-right">
                    {locale === "ar" ? <IoIosArrowBack  /> : <IoIosArrowForward />} 
                   </span>
               </div>
             </div>
           </div>
  )
}
