import Hero from "@/components/Homepage/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Marquee from "@/components/Homepage/Marquee";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      <Marquee></Marquee>
      <Homepage></Homepage>
    </div>
  );
}
