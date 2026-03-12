import AboutLoction from "@/components/common/AboutLoction";
import Dedicated from "@/components/common/Dedicated";
import Hero from "@/components/common/Hero";
import Latest from "@/components/common/Latest";
import MeetingRoom from "@/components/common/MeetingRoom";
import Private from "@/components/common/Private";
import Shared from "@/components/common/Shared";
import Image from "next/image";

export default function Home() {
  return (<>
   <Hero/>
   <AboutLoction/>
   <Latest/>
   <Shared/>
   <MeetingRoom/>
   <Private/>
   <Dedicated/>
  </>
  
  )
}
