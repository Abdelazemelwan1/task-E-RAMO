"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Facebook, Linkedin, Instagram, Play, Apple } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  // كلاس مشترك للروابط مع حركة الخط من اليسار
const linkStyle = "relative w-fit text-sm cursor-pointer transition-all duration-300 after:content-[''] after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-0 after:h-[2px] after:bg-[#3d522b] after:transition-all after:duration-300 pb-2 hover:after:w-full hover:text-[#3d522b]";  return (
    <footer className="bg-[#f9f9f9] pt-12  font-sans">
<div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 rtl:text-right ltr:text-left w-full max-w-[85%] mx-auto">        
        {/* القسم 1: اللوجو والسوشيال ميديا */}
        <div className="space-y-6 flex flex-col items-center ltr:md:items-start rtl:md:items-start">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="object-contain" />
          <div className="flex gap-4">
             {/* تأثير الـ Scale للأيقونات */}
            <Link href="#" className="p-2 text-gray-600 hover:scale-125 hover:text-[#3d522b] transition-transform duration-300">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="p-2 text-gray-600 hover:scale-125 hover:text-[#3d522b] transition-transform duration-300">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="p-2 text-gray-600 hover:scale-125 hover:text-[#3d522b] transition-transform duration-300">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* القسم 2: الصفحات الرئيسية */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#3d522b] mb-4">{t("sections.pages")}</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/" className={linkStyle}>{t("links.home")}</Link></li>
            <li><Link href="/about" className={linkStyle}>{t("links.about")}</Link></li>
            <li><Link href="/products" className={linkStyle}>{t("links.products")}</Link></li>
            <li><Link href="/how" className={linkStyle}>{t("links.howItWorks")}</Link></li>
            <li><Link href="/membership" className={linkStyle}>{t("links.membership")}</Link></li>
            <li><Link href="/contact" className={linkStyle}>{t("links.contact")}</Link></li>
          </ul>
        </div>

        {/* القسم 3: المنتجات */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#3d522b] mb-4">{t("sections.products")}</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link href="#" className={linkStyle}>{t("links.sharedSpace")}</Link></li>
            <li><Link href="#" className={linkStyle}>{t("links.privateOffice")}</Link></li>
            <li><Link href="#" className={linkStyle}>{t("links.meetingRoom")}</Link></li>
            <li><Link href="#" className={linkStyle}>{t("links.dedicatedDesk")}</Link></li>
            <li><Link href="#" className={linkStyle}>{t("links.siteMap")}</Link></li>
          </ul>
        </div>

        {/* القسم 4: أزرار التحميل */}
        <div className="space-y-4">
          <h3 className="text-md font-medium text-[#3d522b] mb-6">{t("sections.apps")}</h3>
          <div className="space-y-3">
            {/* زر Google Play مع هوفر */}
            <Link href="#" className="flex items-center gap-3 border border-black rounded-lg p-2 hover:bg-[#e5e7eb]  transition-all duration-300 group">
              <div className=" p-2 rounded g">
                <Play size={24} className="" />
              </div>
              <div className="rtl:text-right ltr:text-left">
                <p className="text-xs">{t("apps.downloadFrom")}</p>
                <p className="font-semibold text-sm">Google Play</p>
              </div>
            </Link>
            
            {/* زر App Store مع هوفر */}
            <Link href="#" className="flex items-center gap-3 border border-black rounded-lg p-2 hover:bg-[#e5e7eb]  transition-all duration-300 group">
              <div className=" p-2 rounded">
                <Apple size={24} className=" " />
              </div>
              <div className="rtl:text-right ltr:text-left">
                <p className="text-xs">{t("apps.downloadFrom")}</p>
                <p className="font-semibold text-sm">App Store</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* الشريط السفلي الأخير */}
      <div className="mt-12 border-t border-gray-200 bg-[#eeeeee] py-4 text-xs md:text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-4">
            <Link href="#" className="hover:underline  text-xs">{t("bottom.privacy")}</Link>
            <Link href="#" className="hover:underline  text-xs">{t("bottom.terms")}</Link>
            <Link href="#" className="hover:underline  text-xs">{t("bottom.terms2")}</Link>
            <Link href="#" className="hover:underline  text-xs">{t("bottom.terms3")}</Link>
            <Link href="#" className="hover:underline  text-xs">{t("bottom.terms4")}</Link>
            <Link href="#" className="hover:underline  text-xs">{t("bottom.terms5")}</Link>
            
          </div>
          <p>{t("bottom.rights")}</p>
        </div>
      </div>
    </footer>
  );
}