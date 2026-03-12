"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SendHorizontal } from "lucide-react";

export default function Newsletter() {
  const t = useTranslations("Newsletter");

  return (
    <section className="relative py-16 px-4 bg-white overflow-hidden text-center  w-full max-w-[85%] mx-auto border-b border-black/10">
      {/* الصورة اليسرى - تدور باستمرار */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block animate-spin [animation-duration:10s]">
        <div className="bg-[#e6d2b5] p-3 rounded-2xl rotate-12">
           {/* استبدل المسار بصورتك الحقيقية */}
          <Image src="/images/02.svg" alt="icon" width={20} height={20} />
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="max-w-[50%] mx-auto space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          {t("title")}
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          {t("description")}
        </p>

        {/* حقل الإدخال والزر */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
          <input
            type="email"
            placeholder={t("placeholder")}
            className="w-full flex-1 p-3 bg-[#fcfaf7] border border-[#e6d2b5] rounded-lg outline-none focus:ring-1 focus:ring-[#3d522b]"
          />
          <button className="bg-[#3d522b] text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-[#2f4021] transition-all whitespace-nowrap">
            {t("button")}
            <SendHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* الصورة اليمنى - تدور باستمرار */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block animate-spin [animation-duration:10s]">
        <div className="bg-[#e6d2b5] p-3 rounded-2xl -rotate-12">
          {/* استبدل المسار بصورتك الحقيقية */}
          <Image src="/images/02.svg" alt="icon" width={20} height={20} />
        </div>
      </div>
    </section>
  );
}