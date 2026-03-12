import AboutLoction from "@/components/common/AboutLoction";
import Chairlocation from "@/components/common/Chairlocation";
import ContactForm from "@/components/common/ContactUs";
import Dedicated from "@/components/common/Dedicated";
import Hero from "@/components/common/Hero";
import Latest from "@/components/common/Latest";
import DownloadApp from "@/components/common/LocationApp";
import MeetingRoom from "@/components/common/MeetingRoom";
import Newsletter from "@/components/common/Newsletter";
import OutButton from "@/components/common/OutButton";
import PricingSection from "@/components/common/PricingSection";
import Private from "@/components/common/Private";
import RecentArticles from "@/components/common/Recent Articles";
import Shared from "@/components/common/Shared";
import TabsSection from "@/components/common/TabsSection";
import Works from "@/components/common/Works";

export default function Home() {
  return (<>
   <Hero/>
   <AboutLoction/>
   <Latest/>
   <Shared/>
   <MeetingRoom/>
   <Private/>
   <Dedicated/>
   <TabsSection/>
   <Works/>
   <Chairlocation/>
   <DownloadApp/>
   <PricingSection/>
   <RecentArticles/>
   <ContactForm/>
   <Newsletter/>
  </>
  
  )
}
