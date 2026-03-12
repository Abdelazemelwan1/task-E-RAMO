"use client";
import { useLocale, useTranslations } from 'next-intl';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaCheckCircle, FaUsers, FaBriefcase, FaBuilding, FaUserTie } from 'react-icons/fa';
import { RiStockLine } from 'react-icons/ri';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { MdOutlineSecurity } from 'react-icons/md';
import { MdVerifiedUser, MdOutlineUpdate, MdAutorenew } from 'react-icons/md'; // استيراد الأيقونات المناسبة


// --- 2. المكون الداخلي لزر التبديل (Billing Toggle) ---
const BillingToggle = ({ isYearly, onToggle , locale}: { isYearly: boolean, onToggle: () => void , locale: string}) => (
    
    <div className="relative flex flex-col items-center ">
    {/* <div className={`absolute -top-10 transition-all duration-300 transform ${isYearly ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
      <div className="bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white text-[12px] font-bold px-4 py-1 rounded-full shadow-md">
        خصم 20%
      </div>
    </div> */}
    <div className="bg-white border border-gray-100  shadow-sm rounded-3xl p-2 flex items-center gap-6 w-fit h-[70px] px-8">
      <span className={`text-lg font-bold transition-colors ${!isYearly ? 'text-[#22C55E]' : 'text-gray-400'}`}>شهرياً</span>
      <div 
        onClick={onToggle}
        className={`relative w-[90px] h-[42px] rounded-full cursor-pointer transition-colors p-1 flex items-center ${isYearly ? 'bg-[#22C55E]' : 'bg-[#D1D5DB]'}`}
      >
        
     
      <div className={`w-[34px] h-[34px] bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 transform 
            ${isYearly 
              ? (locale === "ar" ? '-translate-x-[48px]' : 'translate-x-[48px]') 
              : 'translate-x-0'}`}>
            {isYearly ? <RiStockLine className="text-[#22C55E] text-xl" /> : <HiOutlineLightningBolt className="text-gray-400 text-xl" />}
          </div>


      </div>
      <span className={`text-lg font-bold transition-colors ${isYearly ? 'text-[#22C55E]' : 'text-gray-400'}`}>سنوياً</span>
    </div>
  </div>
);
export default function PricingSection() {
      const t = useTranslations("plans"); // تأكد من إنشاء هذا القسم في ملفات الترجمة
const locale = useLocale(); // هنجيب اللغة هنا
  const isRTL = locale === 'ar';
    const plans = [
        // monthly
      {
        id: 1,
        category: "shared", // المساحة المشتركة
        type: "monthly",
        prag: t("prag"),
        title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: false
      },
      {
        id: 2,
        category: "private", // المساحة المشتركة
        type: "monthly",
       prag: t("prag"),
       title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: true
      },
      {
        id: 3,
        category: "private", // المساحة المشتركة
        type: "monthly",
       prag: t("prag"),
       title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: false
      },
      {
        id: 4,
        category: "meeting", // المساحة المشتركة
        type: "monthly",
       prag: t("prag"),
       title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: false
      },
      {
        id: 5,
        category: "meeting", // المساحة المشتركة
        type: "monthly",
       prag: t("prag"),
       title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: false
      },
      {
        id: 6,
        category: "dedicated", // المساحة المشتركة
        type: "monthly",
       prag: t("prag"),
       title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: false
      },
    //   years
      {
        id: 7,
        category: "meeting", // المساحة المشتركة
        type: "yearly",
       prag: t("prag"),
       title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: true
      },
      {
        id: 8,
        category: "dedicated", // المساحة المشتركة
        type: "yearly",
       prag: t("prag"),
       title: t("title"),
        desc: t("desc"),
        price: "1,399.00",
        included:t("included"),
        features: [t("included1"),t("included2") , t("included1"),t("included2") , t("included1"),t("included2") ],
        recommended: false
      },
    
    
      // أضف باقي الخطط هنا مع تغيير category و type
    ];
const [billingType, setBillingType] = useState('monthly'); // شهرياً أو سنوياً
const [filter, setFilter] = useState('shared'); // فلتر النوع
  const swiperRef = useRef<any>(null);

  // تصفية البيانات بناءً على الاختيارات
const filteredPlans = plans.filter(plan => {
  // أولاً: لازم نتأكد إن الدفع متوافق (شهري مع شهري أو سنوي مع سنوي)
  const isTypeMatch = plan.type === billingType;

  // ثانياً: لو الفلتر المختار هو 'shared'، اعرض كل التصنيفات
  // لو الفلتر أي حاجة تانية، اعرض التصنيف المختار بس
  const isCategoryMatch = filter === 'shared' ? true : plan.category === filter;

  return isTypeMatch && isCategoryMatch;
});


//   const [isYearly, setIsYearly] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('shared');
const toggleBilling = () => {
    setBillingType(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  }; 
  return (<>
    <section className="py-2 mt-5 bg-white  w-full max-w-[85%] mx-auto">
      <div className="container mx-auto px-6 text-center">
        
        {/* البادج الأخضر العلوي (Pricing Badge) */}
        <div className="inline-flex items-center gap-2 border border-[#9DFBD9] bg-[#d7fbe6] rounded-full px-5 py-2 mb-3 shadow-sm">
          <span className="text-xl">⚡</span> {/* أو استخدم أيقونة إذا فضلت */}
          <span className="text-[#0D2A26] font-medium text-lg uppercase tracking-wider">
            {t("badge")}
          </span>
        </div>

        <h2 className="text-center font-bold text-3xl md:text-5xl max-w-[60%] mx-auto mb-5">
          <span className="bg-gradient-to-b from-[#2B543D] to-[#97B8A7] bg-clip-text text-transparent block">
            {t("title1")}
          </span>
        </h2>

        {/* الوصف (Description) */}
        <p className="text-[#6C7E7B] text-xl leading-relaxed max-w-4xl mx-auto">
          {t("desc1")}
        </p>
      </div>
    </section>


{/* قسم زر التبديل */}
      
    <section className=" py-3 px-4  w-full max-w-[85%] mx-auto">
      {/* 1. Toggle Button (شهري/سنوي) */}
      <div className="flex justify-center mb-1">
        <div className="flex justify-center mb-6">
        <BillingToggle isYearly={billingType === 'yearly'} onToggle={toggleBilling} locale={locale} />
      </div>
        {/* قسم زر التبديل */}
     
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 2. Side Filter (حدد النموذج) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-sm h-fit">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <span className="bg-[#22C55E] p-1 rounded text-white text-md"><MdOutlineSecurity /></span> {t("select")}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {[
              { id: 'shared', label: t("select1"), icon: <FaUsers /> },
              { id: 'private', label: t("select2"), icon: <FaBuilding /> },
              { id: 'meeting', label: t("select3"), icon: <FaBriefcase /> },
              { id: 'dedicated', label: t("select4"), icon: <FaUserTie /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`flex items-center gap-2 p-4 rounded-xl border transition ${filter === item.id ? 'bg-[#7C9070] text-white border-[#7C9070]' : 'bg-gray-50 text-gray-600'}`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Slider (الخطط) */}
        <div className="lg:col-span-3 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              468: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="pb-10"
          >
            {filteredPlans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className={`p-8 rounded-[35px] border h-full flex flex-col transition-all hover:scale-105 duration-500  ${plan.recommended ? 'bg-[#344E25] text-white' : 'bg-white text-gray-800'}`}>
                  {plan.recommended && (
                    <span className="bg-[#E97451] text-white text-xs px-3 py-1 rounded-full w-fit mx-auto mb-4 block  text-center ">للمتوسط الشركات</span>
                  )}
                  <div className="mb-6 flex justify-center">
                     <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${plan.recommended ? 'bg-white/20' : 'bg-[#D1E5D1]'}`}>
                        <FaBuilding />
                     </div>
                  </div>
                  <p className='text-center'>{plan.prag}</p>
                  <h4 className="text-center font-bold text-xl mb-4">{plan.title}</h4>
                  <p className='text-center'>{plan.desc}</p>
                  <div className="text-center mb-6 flex items-center justify-center ">
                    <span className="text-sm opacity-70  text-center flex items-center">  {billingType === 'monthly' ? 'شهرياً' : 'سنوياً'} SAR </span>
                    <span className="text-3xl font-black">{plan.price}</span>
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold mb-4">{plan.included}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <FaCheckCircle className={plan.recommended ? 'text-[#86EFAC]' : 'text-[#3D5A2B]'} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`mt-8 w-full py-3 rounded-xl font-bold transition duration-500 ${plan.recommended ? 'bg-white text-[#3D5A2B]  hover:border-black  hover:bg-gray-300 hover:text-black' : 'bg-[#3D5A2B] text-white border-2 hover:border-black  hover:bg-white hover:text-black'}`}>
                      {t("Buy")}
                   </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

    <div className="flex flex-wrap justify-center gap-8 my-1  pt-6 ">
  {/* Secure Payments */}
  <div className="flex items-center gap-2 text-gray-500">
    <MdVerifiedUser className="text-[#22C55E] text-2xl" />
    <span className="text-sm font-medium">{t("secure_pay") || "Secure Payments"}</span>
  </div>

  {/* Instant Activation */}
  <div className="flex items-center gap-2 text-gray-500">
    <MdOutlineUpdate className="text-[#3B82F6] text-2xl" />
    <span className="text-sm font-medium">{t("instant_act") || "Instant Activation"}</span>
  </div>

  {/* Flexible Cancellation */}
  <div className="flex items-center gap-2 text-gray-500">
    <MdAutorenew className="text-[#A855F7] text-2xl" />
    <span className="text-sm font-medium">{t("flexible_can") || "Flexible Cancellation"}</span>
  </div>
</div>
  </>);
}