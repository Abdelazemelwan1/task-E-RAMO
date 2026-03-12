"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslations } from 'next-intl';






// بيانات المقالات (6 مقالات)

export default function RecentArticles() {
        const t = useTranslations("articles")
    
    const articles = [
      {
        id: 1,
        image: "/images/slid4.png", // ضع مسار الصورة هنا
        date: t("date1"),
        title: t("title1"),
        desc: t("desc1")
      },
      {
        id: 2,
        image: "/images/slid2.png",
        date: t("date2"),
        title: t("title2"),
        desc: t("desc2")
      },
      {
        id: 3,
        image: "/images/slid1.jpg",
        date: t("date3"),
        title: t("title3"),
        desc: t("desc3")
      },
      // كرر البيانات لتصل لـ 6
      { id: 4, image: "/images/slid4.png", date: t("date4"), title: t("title4"), desc: t("desc4") },
      { id: 5, image: "/images/slid5.png", date: t("date5"), title:t("title5"), desc: t("desc5") },
      { id: 6, image: "/images/slid6.jpeg", date: t("date6"), title: t("title6"), desc: t("desc6") },
    ];
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-16 px-4 w-full max-w-[85%] mx-auto">
      {/* Header مع أزرار التحكم */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-[#1A1A1A]">{t("section_title")}</h2>
          <p className="text-gray-500 mt-2">{t("section_subtitle")}</p>
        </div>

        {/* أزرار السهمين */}
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-[#3D5A2B] text-white hover:bg-[#2B3F1F] transition disabled:opacity-50"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-[#3D5A2B] text-white hover:bg-[#2B3F1F] transition disabled:opacity-50"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* السلايدر */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
         autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
            }}
      /* 1. امسح الـ navigation من هنا تماماً */
  onBeforeInit={(swiper) => {
    // 2. التأكد أن الـ params موجودة
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }}
  /* 3. ضيف الـ onInit عشان نضمن إن الأزرار اشتغلت فوراً */
  onInit={(swiper) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className=" cursor-pointer">
              {/* الصورة */}
              <div className="relative h-40 w-full overflow-hidden rounded-t-2xl mb-5">
                <Image
                  src={article.image}
                  alt={article.title}
                 fill
                  className="w-full h-full object-cover"
                />
              </div>
              {/* التفاصيل */}
              <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-[#3D5A2B] transition">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{article.date}</p>
              <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
                {article.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* زر View All */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#3D5A2B] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2B3F1F] transition">
          {t("view_all")}
        </button>
      </div>
    </section>
  );
}