const SignInPage = () => {
  return (
    <section className="bg-[#f0f5f0]">
      <div className="flex flex-col justify-center items-center m-10">
        <div className="text-center mb-6 space-y-1">
          <h1 className="text-2xl font-bold">সাইন ইন</h1>
          <p className="text-gray-500 text-sm">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>
        <form action="">
          <fieldset className="fieldset bg-white border-base-300 rounded-box w-md border p-10">
            <label className="label">ইমেইল</label>
            <input
              type="email"
              className="input w-full mb-3"
              placeholder="ইমেইল"
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              type="password"
              className="input w-full mb-3"
              placeholder="পাসওয়ার্ড"
            />

            <button className="btn bg-[#05893e] text-white mt-4">
              সাইন ইন
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
