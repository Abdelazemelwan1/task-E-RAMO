"use client";

import React from 'react'

import UniversalCard from './UniversalCard';
import { CardData } from '@/types/carttype';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useLocale, useTranslations } from 'next-intl';

export default function Latest() {
    const t = useTranslations("Products");
  const locale = useLocale();
  const listings:CardData[] = [
    {
      id: 1,
      title: t("title1"),
    type: t("type1"),
    price: t("price1"),
    unit: t("unit1"),
    capacity: t("capacity1"),
    description: t("description1"),
    status: "Available",
    Review:0,
      image: "/images/Latest 1.jpeg", // استبدلها بمسار صورك
    },
    {
      id: 2,
      title: t("title2"),
    type: t("type2"),
    price: t("price2"),
    unit: t("unit2"),
    capacity: t("capacity2"),
    description: t("description2"),
    status: "Available",
      Review:0,
      image: "/images/Latest 2.jpg", // استبدلها بمسار صورك
    },
    {
      id: 3,
       title: t("title3"),
    type: t("type3"),
    price: t("price3"),
    unit: t("unit3"),
    capacity: t("capacity3"),
    description: t("description3"),
      Review:0,
      status: "Not Available",
      image: "/images/Latest 3.jpg", // استبدلها بمسار صورك
    },
    {
      id: 4,
       title: t("title4"),
    type: t("type4"),
    price: t("price4"),
    unit: t("unit4"),
    capacity: t("capacity4"),
    description: t("description4"),
     Review:0,
      status: "Available",
      image:  "/images/Latest 4.jpg", // استبدلها بمسار صورك
    }
  ];
  return (<>
      <section className="bg-[#f5f5f5] py-10">
        <div className="w-full max-w-[85%] mx-auto  ">
            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className='text-[30px] font-bold'>{t("title")}</h2>
                    <p className='text-md mt-1 '>{t("des")}</p>
                </div>
                <p className='capitalize text-md flex items-center gap-2  cursor-pointer'>
                   {t("show")}
                    <span className="inline-block animate-move-right">
                        {locale === "ar" ? <IoIosArrowBack  /> : <IoIosArrowForward />} 
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
