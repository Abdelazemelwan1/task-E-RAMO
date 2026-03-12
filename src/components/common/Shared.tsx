"use client";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import UniversalCard from './UniversalCard';
import { CardData } from '@/types/carttype';
import { useLocale, useTranslations } from 'next-intl';

export default function Shared() {
      const t = useTranslations("listings")
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
    Review:4,
      image: "/images/shared.jpg", // استبدلها بمسار صورك
      status: "Available",
    }
  
  ];
  return (<>
      <section className="bg-white py-10">
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
