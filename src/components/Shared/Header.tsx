import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { date } from "@/lib/utils";
import Marquee from "./Marquee";

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

          <div className="flex items-center gap-2 font-sans">
            <a
              href="/signin"
              className="sm:px-5 py-1 sm:py-2.5 text-center text-xs rounded-lg sm:text-sm  sm:font-bold bg-gray-200 hover:bg-mauve-200 hover:scale-105 transition duration-200"
            >
              সাইন ইন
            </a>

            <a
              href="/signup"
              className="bg-[#05893e] text-white px-1 sm:px-5 py-1 sm:py-2.5 text-center text-xs rounded-lg sm:text-sm  sm:font-bold hover:bg-green-800 hover:-translate-y-0.5 transition duration-200 shadow-lg"
            >
              সাইন আপ
            </a>
          </div>
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
