// types/card.ts


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