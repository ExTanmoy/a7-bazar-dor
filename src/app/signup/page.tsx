"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const router = useRouter();
    
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;

        if(password !== confirmPassword) {
          toast.error('পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলেনি!');
          return;
        }

        const user = {
          name,
          email,
          password,
        };

        // SignUp Request
        const { data , error} = await authClient.signUp.email({
            ...user , 
            callbackURL: '/',
        })

        if(data) {
            toast.success('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!');
            router.push('/')
        }
        if(error) {
            toast.error('সাইন আপ করতে সমস্যা হয়েছে!')
        }
    }

    const handleGoogleSignUp = async () => {
    const { data, error } = await authClient.signIn.social({
        provider: "google",
    });

    if(data) toast.success("সাইন ইন সফল হয়েছে!");
    if(error) toast.error("সাইন ইন করতে সমস্যা হয়েছে!");
};

  return (
    <section className="bg-[#f0f5f0]  flex items-center justify-center">

      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto m-7 w-full">
        <div className="text-center mb-6 space-y-1">
          <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-gray-500 text-sm">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-white border-base-300 rounded-box w-md border p-7 shadow-sm">

            <label className="label">আপনার নাম লিখুন</label>
            <input
              name="name"
              type="text"
              className="input w-full mb-2"
              placeholder="আপনার নাম লিখুন"
              required
            />

            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-full mb-2"
              placeholder="you@email.com"
              required
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input w-full mb-2"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input
              name="confirmPassword"
              type="password"
              className="input w-full mb-2"
              placeholder="আবার লিখুন"
              required
            />

            <button type="submit" className="btn bg-[#05893e] text-white mt-4">
              সাইন আপ
            </button>
          </fieldset>
        </form>
        <button onClick={handleGoogleSignUp} className="btn btn-link">Google দিয়ে সাইন ইন করুন</button>
      </div>
    </section>
  );
};

export default SignUpPage;
