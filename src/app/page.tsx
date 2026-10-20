import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      <Marquee></Marquee>
      <Hero></Hero>
    </div>
  );
}
