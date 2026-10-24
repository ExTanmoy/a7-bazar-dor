"use client";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = {
      email,
      password,
    };

    // SignUp Request
    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সাইন ইন সফলভাবে সম্পন্ন হয়েছে!");
    }
    if (error) {
      toast.error("সাইন ইন করতে সমস্যা হয়েছে!");
    }
  };

  const handleGoogleSignIn = async () => {
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
          <h1 className="text-2xl font-bold">সাইন ইন</h1>
          <p className="text-gray-500 text-sm">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-white border-base-300 rounded-box w-md border p-7 shadow-sm">
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

            <button type="submit" className="btn bg-[#05893e] text-white mt-4">
              সাইন ইন
            </button>
          </fieldset>
        </form>
        <button onClick={handleGoogleSignIn} className="btn btn-link">Google দিয়ে সাইন ইন করুন</button>
      </div>
    </section>
  );
};

export default SignInPage;
