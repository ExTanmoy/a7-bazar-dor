const SignUpPage = () => {
  return (
    <section className="bg-[#f0f5f0]">
      <div className="flex flex-col justify-center items-center m-10max-w-7xl mx-auto m-10">
        <div className="text-center mb-6 space-y-1">
          <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-gray-500 text-sm">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <form action="">
          <fieldset className="fieldset bg-white border-base-300 rounded-box w-md border p-10">
            <label className="label">নাম</label>
            <input
              type="text"
              className="input w-full mb-3"
              placeholder="নাম"
            />

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

            <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input
              type="password"
              className="input w-full mb-3"
              placeholder="পাসওয়ার্ড নিশ্চিত করুন"
            />

            <button className="btn bg-[#05893e] text-white mt-4">
              সাইন আপ
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
