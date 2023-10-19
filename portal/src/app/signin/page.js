"use client";

import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from "next/link";
import { useState } from "react";
import BgImage from "../components/bgImage";

export default function Signin() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      {...formData,[name]: value,}
    );


    setErrors({
      ...errors,
      [name]: "",
    });
  };

  
  const handleSubmit = async(e) => {
    
    e.preventDefault();
    
    // Check for empty fields and set errors if needed
    const newErrors = {};
    if (formData.email.trim() === "") {
      newErrors.email = "Please input the Email Address";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Please input the Password";
    }

    // If there are errors, set them in state and prevent submission
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
    } else {
      // Form is valid,  handling the submission logic 
      console.log("Form submitted:", formData);

      try{
       
        const response = await axios.post('http://ec-api.czduhsdfatdud7bz.eastus.azurecontainer.io/api/v1/user/login', formData);
        console.log('Logged In Successfully: ' ,response.data);

        const userCompany = response.data.company;
        const token = response.data.token;

        
        localStorage.setItem('accessToken', token);

        if(userCompany === 'EC'){
          router.push('/ECportal');
        } else{
          router.push('/Portal');
        }

      }
      
      catch (error){
          alert('Error logging in:', error);
      }
      
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
        <BgImage/>
      <div className="flex flex-col justify-center items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 h-4/6 bg-white p-6 rounded-lg shadow-2xl">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-semibold text-custom-txt-blue">SIGN IN</h1>
        </div>
        <div className="text-center w-5/6">


          <form onSubmit={handleSubmit}>


            <div className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="text-center rounded-full peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <label
                  htmlFor="email"
                  className="font-semibold w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1/4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
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
                  className="text-center rounded-full peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
                <label
                  htmlFor="password"
                  className="font-semibold w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1/4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="text-center mb-6">
              <button
                type="submit"
                className="w-full sm:w-full rounded-full px-3 py-4 text-white focus:bg-custom-green focus:outline-none font-semibold bg-custom-blue"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Don't have an account yet?
              <Link
                href={'/signup'}
                className="ml-1 font-semibold text-custom-blue hover:underline focus:text-custom-blue-dark focus:outline-none"
              >
                Sign up
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
