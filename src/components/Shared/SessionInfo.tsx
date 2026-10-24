"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const SessionInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  if(isPending) return null;

  const handleSignOut = async() => {
    const {data , error} = await authClient.signOut();
    if(data) {
        toast.success("সাইন আউট সফলভাবে সম্পন্ন হয়েছে!");
    } 
    if(error) {
        toast.error("সাইন আউট করতে সমস্যা হয়েছে!");
    }
  }

  return (
    <div>
      {user ? (
        <div className="dropdown dropdown-end">
      {/* Trigger Button */}
      <div 
        tabIndex={0} 
        role="button" 
        className="flex items-center gap-3 bg-base-100 border border-base-200 hover:bg-base-200/50 transition-colors rounded-full pl-2 pr-4 py-1.5 cursor-pointer shadow-sm"
      >
        <div className="avatar">
          {
            user?.image ? (
              <Image src={user.image} width={50} height={50} alt={user?.name ?? 'user'} className="w-10"></Image>
            ) : (
              <div className="bg-[#05893e] text-neutral-content w-10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">{user?.name?.[0] ?? '?'}</span>
              </div>
            )
          }
        </div>
        <span className="font-medium text-sm text-base-content">{user?.name?.trim().split(' ')[0] ?? '?'}</span>
        <span>▾</span>
      </div>

      {/* Dropdown Content (Menu) */}
      <div 
        tabIndex={0} 
        className="dropdown-content z-1 mt-3 w-72 bg-base-100 rounded-2xl shadow-xl border border-base-200 overflow-hidden"
      >
        {/* User Info Header */}
        <div className="px-5 py-4 border-b border-base-200">
          <h3 className="font-bold text-base text-base-content">{user?.name ?? '?'} </h3>
          <p className="text-sm text-base-content/60 mt-0.5">{user?.email}</p>
        </div>

        {/* Menu Items */}
        <ul className="menu p-2 gap-1 w-full text-sm font-medium">
          <li>
            <Link href="/profile" className="flex items-center gap-3 py-2.5 text-base-content hover:bg-base-200 rounded-lg">
              {/* User Profile SVG */}
              <span className="text-xl">👤</span>
              আমার প্রোফাইল
            </Link>
          </li>
          <li>
            <button onClick={handleSignOut} className="flex items-center gap-3 py-2.5 text-error hover:bg-error/10 rounded-lg">

              <span className="text-2xl font-bold">⏎</span>
              সাইন আউট
            </button>
          </li>
        </ul>
      </div>
    </div>
      ) : (
        <div className="flex items-center gap-2 font-sans">
          <Link
            href="/signin"
            className="sm:px-5 py-1 sm:py-2.5 text-center text-xs rounded-lg sm:text-sm  sm:font-bold bg-gray-200 hover:bg-mauve-200 hover:scale-105 transition duration-200"
          >
            সাইন ইন
          </Link>

          <a
            href="/signup"
            className="bg-[#05893e] text-white px-1 sm:px-5 py-1 sm:py-2.5 text-center text-xs rounded-lg sm:text-sm  sm:font-bold hover:bg-green-800 hover:-translate-y-0.5 transition duration-200 shadow-lg"
          >
            সাইন আপ
          </a>
        </div>
      )}
    </div>
  );
};

export default SessionInfo;
