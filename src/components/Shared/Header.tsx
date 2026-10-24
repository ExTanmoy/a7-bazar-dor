import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { date } from "@/lib/utils";
import Marquee from "./Marquee";
import SessionInfo from "./SessionInfo";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      {/* Upper section (logo, Signing) */}
      <section className="py-3 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between px-4">
          <Link href={"/"}>
            <div className="flex gap-2">
              <span className="flex justify-center items-center bg-[#05893e] rounded-xl size-11">
                <Image
                  height={25}
                  width={25}
                  src={"/logo.svg"}
                  alt="logo"
                ></Image>
              </span>
              <div>
                <h2 className="text-sm sm:text-xl font-bold">বাজার দর</h2>
                <p className=" text-xs text-slate-500">{date}</p>
              </div>
            </div>
          </Link>

          <SessionInfo></SessionInfo>
        </div>
      </section>

      {/* Navlinks (Category) */}
      <section>
        <NavLinks></NavLinks>
        <Marquee></Marquee>
      </section>
    </header>
  );
};

export default Header;
