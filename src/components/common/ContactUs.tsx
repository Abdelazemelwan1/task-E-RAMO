"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, Phone, MapPin, Globe, Facebook, Linkedin, Instagram } from "lucide-react";
import { TikTok_Sans } from "next/font/google";
import { AiFillTikTok } from "react-icons/ai";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  // دالة التحقق من الكابتشا
  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 font-sans border-b border-black/10 ">
      {/* القسم الأيسر: معلومات الاتصال */}
      <div className="space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-black">{t("title")}</h2>
        <p className="text-gray-400 -mt-4">{t("subtitle")}</p>

        <div className="space-y-4 pt-1">
          <div className="flex items-start gap-3">
            <MapPin className="text-green-700 w-6 h-6" />
            <p>Address: Saad Al-Junaidel Street, Jarir Building, Sari Branch, Jeddah</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-green-700 w-6 h-6" />
            <p dir="ltr">+9660540581086</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-700 w-6 h-6" />
            <p>info@chairlocation.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-green-700 w-6 h-6" />
            <p>www.chairlocation.com</p>
          </div>
        </div>

        <div className="pt-2">
          <h4 className="font-semibold mb-4 text-black">{t("followUs")}</h4>
          <div className="flex gap-4 text-gray-500">
            <Facebook className="cursor-pointer hover:text-blue-600 w-5 h-5" />
            <Linkedin className="cursor-pointer hover:text-blue-700 w-5 h-5" />
            <Instagram className="cursor-pointer hover:text-pink-600 w-5 h-5" />
            <AiFillTikTok className="cursor-pointer hover:text-pink-600 w-5 h-5" />
            {/* أيقونة تيك توك يمكن إضافتها كـ SVG خارجي */}
          </div>
        </div>
      </div>

      {/* القسم الأيمن: الفورم */}
      <div className="space-y-4">
        <form className="space-y-4">
          <input
            type="text"
            placeholder={t("name")}
            className="w-full p-3 bg-[#ebede9] rounded-lg border-b-2 border-transparent rounded-t focus:border-green-700 outline-none resize-none transition-colors"
          />
          <input
            type="email"
            placeholder={t("email")}
            className="w-full p-3 bg-[#ebede9] rounded-lg border-b-2 border-transparent rounded-t focus:border-green-700 outline-none resize-none transition-colors"
          />
          <input
            type="text"
            placeholder={t("phone")}
            className="w-full p-3 bg-[#ebede9] rounded-lg border-b-2 border-transparent rounded-t focus:border-green-700 outline-none resize-none transition-colors"
          />
          <textarea
            placeholder={t("message")}
            rows={4}
            className="w-full p-3 bg-[#ebede9] rounded-lg border-b-2 border-transparent rounded-t focus:border-green-700 outline-none resize-none transition-colors"
          ></textarea>

          {/* أداة ReCAPTCHA */}
          <div className="mt-4">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // ضع مفتاح الموقع هنا
              onChange={handleCaptchaChange}
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={!isCaptchaVerified}
              className={`px-12 py-3 rounded text-white font-medium transition-all ${
                isCaptchaVerified 
                ? "bg-[#9db097] hover:bg-[#8ca085] cursor-pointer" 
                : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {t("send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}