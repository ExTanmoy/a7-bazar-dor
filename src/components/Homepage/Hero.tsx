import { date } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-10">
          
          {/* Left Content Section */}
          <div className="flex-1 space-y-6">
            
            {/* Date Badge */}
            <div className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-md">
              {date}
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              আজকের বাজারের দাম এক নজরে 
            </h1>

            {/* Description Paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* Call to Action Button */}
            <div className="pt-2">
              <a href = "#all-products" className="bg-[#05893e] hover:bg-[#00522c] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200">
                সব পণ্য দেখুন
              </a>
            </div>
            
          </div>

          {/* Right Image Section */}
          <div className="shrink-0 w-64 md:w-80 lg:w-90">
            
            <Image 
              src="/bazar-hero 1.svg" 
              width={30}
              height={20}
              alt="Vegetable Basket" 
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>

        </div>
      </div>
  );
};

export default Hero;