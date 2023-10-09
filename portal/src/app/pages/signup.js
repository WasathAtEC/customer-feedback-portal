import Link from "next/link";


export default function Signup() {
    return (
    
      <div className="h-screen flex justify-center items-center bg-custom-blue">
        <div className="flex flex-col justify-center items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 h-4/5 bg-white p-6 rounded-lg shadow-xl">
          <div className="text-center mb-10">
            <h1 className="text-6xl font-semibold">
              SIGN UP
            </h1>
          </div>
          <div className="text-center  w-5/6">
            <form action="">
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="rounded-lg peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="email"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    name="uname"
                    id="uname"
                    placeholder="User Name"
                    className="rounded-lg peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="uname"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    User Name
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="rounded-lg peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="password"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="rounded-lg peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="password"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                   Re-Enter the Password
                  </label>
                </div>
              </div>
              <div className="text-center mb-6">
                <button
                  type="submit"
                  className="w-full sm:w-full rounded-full bg-custom-green px-3 py-4 text-white focus:bg-custom-pressed-green focus:outline-none font-semibold"
                >
                Sign Up
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
               Already have an account? 
                <Link
                  href={""}
                  className="ml-1 font-semibold text-custom-blue hover:underline focus:text-custom-blue-dark focus:outline-none"
                >
                    Sign in
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
  