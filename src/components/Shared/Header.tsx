import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { date } from "@/lib/utils";

const Header = () => {
  return (
    <header className="border-b border-slate-200">
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
                <h2 className="text-xl font-bold">বাজার দর</h2>
                <p className=" text-xs text-slate-500">{date}</p>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 font-sans">
            <a
              href="#"
              className="px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-mauve-200 hover:scale-105 transition-all duration-200"
            >
              সাইন ইন
            </a>

            <a
              href="#"
              className="bg-[#05893e] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-green-800 hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
            >
              সাইন আপ
            </a>
          </div>
        </div>
      </section>

      {/* Navlinks (Category) */}
      <section className="py-1">
        <NavLinks></NavLinks>
      </section>
    </header>
  );
};

export default Header;
