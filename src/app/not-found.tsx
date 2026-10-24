// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-[#f0f5f0] flex items-center justify-center px-4 font-sans">
      
      {/* মেইন কার্ড কন্টেইনার */}
      <div className="bg-white rounded-2xl shadow-sm border border-base-200 p-8 sm:p-12 max-w-md w-full text-center">
        
        {/* বড় 404 টেক্সট */}
        <h1 className="text-7xl font-extrabold text-[#05893e] tracking-tight mb-2">
          404
        </h1>
        
        {/* আইকন বা ছোট ডেকোরেশন (অপশনাল) */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#05893e]/10 rounded-full flex items-center justify-center text-3xl">
            🔍
          </div>
        </div>

        {/* হেডিং */}
        <h2 className="text-xl sm:text-2xl font-bold text-base-content mb-3">
          পেইজটি খুঁজে পাওয়া যায়নি!
        </h2>

        {/* ডেসক্রিপশন */}
        <p className="text-sm sm:text-base text-base-content/70 leading-relaxed mb-8">
          আপনি যে রিসোর্সটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে বা এর অস্তিত্ব নেই। 
          দয়া করে ঠিকানাটি পুনরায় যাচাই করুন।
        </p>

        {/* হোম পেজে ফিরে যাওয়ার বাটন */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-[#05893e] hover:bg-[#047232] text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          {/* Arrow Left SVG */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          হোম পেইজে ফিরে যান
        </Link>
        
      </div>
    </div>
  );
}