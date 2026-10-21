// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>পেইজটি খুঁজে পাওয়া যায়নি!</h2>
      <p>আপনি যে রিসোর্সটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে বা অস্তিত্ব নেই।</p>
      <Link href="/">হোম পেইজে ফিরে যান</Link>
    </div>
  );
}
