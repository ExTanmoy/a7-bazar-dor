"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import toast from "react-hot-toast";
import { FiArrowLeft } from 'react-icons/fi';

export default function ProfilePage() {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  

  if (isPending) {
    return <div className="text-center py-10">লোড হচ্ছে...</div>;
  }

  if (!user) {
    return <div className="text-center py-10">অনুগ্রহ করে লগইন করুন।</div>;
  }

  const handleSignOut = async () => {
    const { data, error } = await authClient.signOut();
    if (data) toast.success("সাইন আউট সফলভাবে সম্পন্ন হয়েছে!");
    if (error) toast.error("সাইন আউট করতে সমস্যা হয়েছে!");
  };

  const submitUpdateProfile = async (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries()) as {name: string};
    await authClient.updateUser({
        ...newUserData
    })
  }

  return (
    <div className="min-h-screen bg-[#eef5f1] py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        
        {/* header section */}
        <div>
          <h1 className="text-2xl font-bold text-base-content">আমার প্রোফাইল</h1>
          <p className="text-sm text-base-content/70 mt-1">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>

        {/* user info card */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between border border-base-200">
          <div className="flex items-center gap-4">

            {user?.image ? (
              <Image
                src={user.image}
                width={64}
                height={64}
                alt={user?.name ?? 'User'}
                className="w-16 h-16 rounded-xl object-cover shadow-sm"
              />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-[#05893e] text-white flex items-center justify-center shadow-sm">
                <span className="text-xl font-bold">{user?.name?.[0] ?? '?'}</span>
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold text-base-content">{user?.name ?? 'Unknown User'}</h2>
              <p className="text-sm text-base-content/70">{user?.email ?? 'No email provided'}</p>
            </div>
          </div>

          <button 
            onClick={handleSignOut}
            className="mt-4 sm:mt-0 flex items-center gap-2 border-2 border-red-400 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition-colors">
            <FiArrowLeft className="w-4 h-4" />
            সাইন আউট
          </button>
        </div>

        {/* Info Update Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-base-200">
          <h3 className="text-lg font-bold text-base-content mb-6">তথ্য</h3>

          <form onSubmit={submitUpdateProfile} className="space-y-4">
            <div className="form-control w-full">

              <label className="label pt-0">
                <span className="label-text font-semibold text-base-content">নাম</span>
              </label>
              <input 
              name="name"
                type="text" 
                defaultValue={user?.name || ''} 
                className="input input-bordered w-full bg-white focus:outline-none focus:border-[#05893e] focus:ring-1 focus:ring-[#05893e]" 
                placeholder="আপনার নাম লিখুন"
              />
            
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#05893e] hover:bg-[#047232] text-white font-bold py-3 rounded-lg mt-6 transition-colors cursor-pointer"
            >
              আপডেট
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}