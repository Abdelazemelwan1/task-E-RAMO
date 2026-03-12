// types/card.ts

import { ReactNode } from "react";

export interface CardData {
    id: number;
  title: string;
  type:string;
  price: string;
  unit: string;
  capacity: string;
  description: string;
  image: string;
  status: "Available" | "Not Available"; 
  Review:number
}


export interface TabContent {
  id: number;
  label: string;
  icon: ReactNode; // لكي يقبل المكونات البرمجية للأيقونات مثل <BiLayout />
  title: string;
  subtitle: string;
  description: string[];
  amenities: string[]; // مصفوفة من النصوص
  price: string;
  image: string;
  unit: string;
}


export interface WorkStep {
  id: number;
  title: string;
  describ: string; // لاحظ أننا التزمنا بنفس المسمى اللي كتبته في الـ Object
  img: string;
}