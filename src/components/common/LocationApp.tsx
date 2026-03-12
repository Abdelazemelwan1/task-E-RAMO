"use client";
import Image from 'next/image';
import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl'; // استورد هذا


export default function DownloadApp() {
    const pathname = usePathname();
  const t = useTranslations("DownloadSection");
const locale = useLocale(); // احصل على اللغة الحالية
const isRtl = locale === 'ar';

  return (
    <section className="max-w-[90%] mx-auto my-10">
      {/* Container with rounded corners and background color */}
      <div className={`bg-[#FAF6F1] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden ${isRtl ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Left Side: Phone Image */}
        <div className="w-full h-[50vh] md:w-1/2 flex justify-center items-end relative z-10">
          <div className="relative top-[70%] w-[200px] h-[400px] md:w-[300px] md:h-[600px]">
            <Image
              src="/images/phon.png" // تأكد من إضافة مسار الصورة الصحيح
              alt="Chair Location App"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left z-10">
          <h2 className="text-[#0D2A26] text-xl md:text-3xl font-bold mb-6">
            {t("title") }
          </h2>
          <p className="text-[#5B6B69] text-md mb-10 leading-relaxed max-w-md">
            {t("description")}
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Google Play Button */}
            <a href="#" className="flex items-center gap-3 bg-transparent border border-[#0D2A26] px-6 py-3 rounded-xl hover:bg-[#e5e7eb]  transition-all group">
              <FaGooglePlay className="text-3xl text-[#0D2A26] " />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs uppercase">{t("Download")}</span>
                <span className="text-xl font-bold">Google Play</span>
              </div>
            </a>

            {/* App Store Button */}
            <a href="#" className="flex items-center gap-3 bg-transparent border border-[#0D2A26] px-6 py-3 rounded-xl hover:bg-[#e5e7eb]  transition-all group">
              <FaApple className="text-3xl text-[#0D2A26] " />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs uppercase">Download on</span>
                <span className="text-xl font-bold">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Floating Decorative Hand (Optional) */}
        <div className="absolute top-10 right-10 hidden lg:block opacity-20 animate-move-right">
             <Image src="/images/03.png" alt="icon" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}