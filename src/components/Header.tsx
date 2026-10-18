import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });
  console.log(date);
  return (
    <header className="my-3">
      <section className=" max-w-7xl mx-auto flex justify-between">
        <div className="flex gap-2">
          <span className="flex justify-center items-center bg-[#05893e] rounded-xl size-11">
            <Image height={25} width={25} src={"/logo.svg"} alt="logo"></Image>
          </span>
          <div>
            <h2 className="text-xl font-bold">বাজার দর</h2>
            <p className=" text-xs text-slate-500">{date}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 font-sans">
          
          <a
            href="#"
            className="px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-mauve-200 transition-all duration-200"
          >
            সাইন ইন
          </a>

          <a
            href="#"
            className="bg-[#05893e] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-green-800 transition-all duration-200 shadow-lg"
          >
            সাইন আপ
          </a>
        </div>
      </section>
      <section>catagory</section>
    </header>
  );
};

export default Header;
