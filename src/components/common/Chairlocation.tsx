"use client";

import { WorkStep } from '@/types/carttype'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'


export default function Chairlocation() {
      const t = useTranslations("location")
    
    const Data_Chair:WorkStep[] = [
        {
            id: 1,
            title:t("title1"),
            describ : t("des1"),
            img: "/images/Chair1.jpg"
        },
        {
            id: 2,
            title:t("title2"),
            describ :  t("des2"),
            img: "/images/Chair2.jpg"
        },
        {
            id: 3,
            title:t("title3"),
            describ : t("des3"),
            img: "/images/Chair3.jpg"
        },
    ]
  return (<>
        <section className="max-w-[85%] mx-auto relative   rounded-3xl p-8 mt-28">
            <div className="w-full max-w-[85%] mx-auto  ">
                <div className="text-center">
                    <h2 className='text-[30px] font-semibold'>{t("title")}</h2>
                    <p className='text-sm mt-1 '>{t("des")}</p>
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
