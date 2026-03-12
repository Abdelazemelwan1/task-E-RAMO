"use client";
import Image from 'next/image';
import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import OutButton from './OutButton';
import BlobButton from './BlobButton';

export default function AboutLoction() {
    const t = useTranslations("About")
    const image_About = [
        {img:  "/images/about1.jpg", id:1},
        {img:  "/images/about2.jpg", id:2},
        {img:  "/images/about3.jpg", id:3}
    ];
    const desc_About = [
        {id: 1 ,icon: <FaCheck />, desc: t("AmenityText")},
        {id: 2 ,icon: <FaCheck /> , desc: t("SupportText")},
        {id: 3 ,icon: <FaCheck /> , desc: t("OfficesCount")}
    ]
  return (<>
  <section className='grid xl:grid-cols-2 gap-6 w-full max-w-[85%] mx-auto'>
    <div className="">
        <h2 className='text-[#000000] text-[30px] font-bold'>{t("Title")}</h2>
        <p className='text-[15px]'>{t("Description")}</p>
        <h3 className='text-xl my-3'>{t("HowItWorksTitle")}</h3>
        <p><span className='font-bold text-[15px]'>{t("HowItWorksDescbold")}</span> {t("HowItWorksDesc")}</p>
        <h4 className='text-lg py-2.5'>{t("ProcessTitle")}</h4>
        <p className='text-[15px]'><span className='font-bold'> {t("SearchTitle")}</span> {t("SearchDesc")}</p>
        <p className='text-[15px]'><span className='font-bold'>{t("BrowseTitle")}</span>{t("BrowseDesc")}</p>
        <p className='text-[15px]'><span className='font-bold'> {t("BookTitle")}</span>{t("BookDesc")}</p>
        <h2 className='text-lg font-bold mt-3'>{t("TargetTitle")}</h2>
        <p className='text-[15px]'><span className='font-bold'> {t("FreelancersTitle")}</span>{t("FreelancersDesc")}</p>
        <p className='text-[15px]'><span className='font-bold'>{t("StartupsTitle")}</span>{t("StartupsDesc")}</p>
        <p className='text-[15px]'><span className='font-bold'> {t("TeamsTitle")}</span> {t("TeamsDesc")}</p>
        <p className='text-[15px]'>In short, <span className='font-bold'> {t("HowItWorksDescbold")}</span> {t("WhyTitle")}</p>
        <h2 className='font-semibold text-2xl my-5'>{t("WhyTitle")}</h2>
        {desc_About.map((item) => <div key={item.id} className="flex gap-2 items-center my-3">
                <span className='bg-[#e7caaa] w-8 h-8 rounded-full flex items-center justify-center'>{item.icon}</span>
                <p>{item.desc}</p>
            </div>
        )}
        <div className="flex gap-4 py-3 bg-white">
      <OutButton label={t("contact")}/>
      <BlobButton label={t("sava")}/>
    </div>
    </div>
    <div className="flex flex-col gap-3 rounded-2xl w-full">
         {image_About.map((item) => 
        <div key={item.id} className="relative w-full h-45 rounded-2xl ">
        <Image  src={item.img} alt='image-about' fill className='w-full rounded-2xl object-cover'/></div>
        )}
       
    </div>
  </section>
  </>)
}
