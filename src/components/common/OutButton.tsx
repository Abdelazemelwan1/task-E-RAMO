"use client";
import React from "react";

// تعريف الـ Props لاستقبال النص وأي وظيفة أخرى
interface OutButtonProps {
  label: string;       // النص اللي هيظهر على الزرار
  onClick?: () => void; // وظيفة الزرار عند الضغط (اختياري)
  className?: string;   // لتمرير تنسيقات إضافية (اختياري)
}

const OutButton = ({ label, onClick, className }: OutButtonProps) => {
  return (
    <div className={`blob-btn-wrap overflow-hidden inline-block ${className}`}>
      <button
        onClick={onClick}
        className="blob-btn relative z-10 flex items-center justify-center px-6 py-2 text-[14px] font-bold text-black hover:text-white bg-white  border-2 border-[#365327] rounded-lg cursor-pointer whitespace-nowrap transition-colors duration-500 hover:text-[#365327] hover:rounded-xl group mb-0"
        type="button"
      >
        {/* النص هو اللي بيتبعت من برا */}
        <span className="relative z-20">{label}</span>
        
        <span className="blob-inner absolute inset-0 z-[-1] overflow-hidden rounded-lg">
          <span className="blobs relative block h-full">
            <span className="blob absolute top-0.5 w-1/4 h-full bg-[#365327] rounded-full translate-y-[150%] scale-[1.4] transition-transform duration-[0.45s] left-0 delay-0 group-hover:translate-y-0"></span>
            <span className="blob absolute top-0.5 w-1/4 h-full bg-[#365327] rounded-full translate-y-[150%] scale-[1.4] transition-transform duration-[0.45s] left-[30%] delay-[0.08s] group-hover:translate-y-0"></span>
            <span className="blob absolute top-0.5 w-1/4 h-full bg-[#365327] rounded-full translate-y-[150%] scale-[1.4] transition-transform duration-[0.45s] left-[60%] delay-[0.16s] group-hover:translate-y-0"></span>
            <span className="blob absolute top-0.5 w-1/4 h-full bg-[#365327] rounded-full translate-y-[150%] scale-[1.4] transition-transform duration-[0.45s] left-[90%] delay-[0.24s] group-hover:translate-y-0"></span>
          </span>
        </span>
      </button>

      {/* الفلتر لازم يكون موجود مرة واحدة في الصفحة، المكون هنا بيضمن وجوده */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default OutButton;