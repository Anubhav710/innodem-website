import Cursor from "@/components/Cursor";
import AboutUs from "@/components/sections/AboutUs";
import Category from "@/components/sections/Category";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA2";
import EnquiryForm from "@/components/sections/EnquiryForm";
import Experience from "@/components/sections/Experience";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import HowWeGenerateMore from "@/components/sections/HowWeGenerateMore";
import LatestBuyer from "@/components/sections/LatestBuyer";

import OurServices from "@/components/sections/OurServices";
import Service from "@/components/sections/Service";
import Slider from "@/components/sections/Slider";
import Statictics from "@/components/sections/Statictics";
import TeamWork from "@/components/sections/TeamWork";
import Testimonials from "@/components/sections/Testimonials";
import WhyTrust from "@/components/sections/WhyTrust";

export default function Home() {
  return (
    <main className="bg-[#F5F8F3]  ">
      <Cursor />
      <Header />
      <Slider />
      <div className="max-w-screen-xl mx-auto ">
        <Service />
        <AboutUs />
      </div>
      <Experience />
      <div className="max-w-screen-xl mx-auto ">
        <LatestBuyer />
      </div>
      <EnquiryForm />
      <CTA />
      <Category />
      <WhyTrust />
      <OurServices />
      <CTA2 />
      <HowWeGenerateMore />
      <Statictics />
      <FAQ />
      <Testimonials />
      <TeamWork />
      <Footer />
    </main>
  );
}
