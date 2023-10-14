"use client";

import Link from "next/link";
import Image from "next/image";
import BgImage from "../bgImage";
import React, { useState } from 'react';

export default function Signup() {

  //Company Selection Control
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  //Form Validation
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Validate each field
    if (formData.fname.trim() === '') {
      errors.fname = 'First Name is required';
    }

    if (formData.lname.trim() === '') {
      errors.lname = 'Last Name is required';
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (formData.password.trim() === '' ) {
      errors.password = 'Password is required';
    }

    if (formData.confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Password does not match';
    }
   
    setFormErrors(errors);

    
    if (Object.keys(errors).length === 0) {
      //Submission Logic
    }
  };

    return (

      <div className="h-screen flex justify-center items-center ">

        <BgImage/>
        <div className="flex flex-col justify-center items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5  bg-white p-6 rounded-lg shadow-2xl">
          <div className=" text-center mb-10">
            <h1 className="text-6xl font-semibold">
              SIGN UP
            </h1>
          </div>
          <div className="text-center  w-5/6">
            <form action="" onSubmit={handleFormSubmit}>
            <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={handleInputChange}
                    className="rounded-full peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="off"
                  />
                  {formErrors.fname && <span className="text-red-500">{formErrors.fname}</span>}
                  <label
                    htmlFor="uname"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1/4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    First Name
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                    value={formData.lname}
                    onChange={handleInputChange}
                    className="rounded-full peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="off"
                  />
                  {formErrors.lname && <span className="text-red-500 z-10000">{formErrors.lname}</span>}
                  <label
                    htmlFor="uname"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1/4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-full peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="off"
                  />
                  {formErrors.email && <span className="text-red-500 z-10000">{formErrors.email}</span>}
                  <label
                    htmlFor="email"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1/4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
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
                    value={formData.password}
                    onChange={handleInputChange}
                    className="rounded-full peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  {formErrors.password && <span className="text-red-500 z-10000">{formErrors.password}</span>}
                  <label
                    htmlFor="password"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1/4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="rounded-full peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  {formErrors.confirmPassword && <span className="text-red-500 z-10000">{formErrors.confirmPassword}</span>}
                  <label
                    htmlFor="confirmPassword"
                    className="w-full pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-1/4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                  Confirm Password
                  </label>
                </div>
              </div>

              <div className="dropdown">
               <label tabIndex={0} className="btn btn-primary">Select the Company</label>

          <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <label className="py-1"><input type="radio" value={"company1"} name="company" checked={selectedOption === "option1"}  onChange={handleOptionChange}
          className="mr-2 appearance-none"  /> Company 1</label>
            <label className="py-1"><input type="radio" value={"company2"} name="company" checked={selectedOption === "option2"}  onChange={handleOptionChange}
           /> Company 2</label>
            <label className="py-1"><input type="radio" value={"company3"} name="company" checked={selectedOption === "option3"}  onChange={handleOptionChange}
          className="mr-2 appearance-none" /> Company 3</label>
            <label className="py-1"><input type="radio" value={"company4"} name="company" checked={selectedOption === "option4"}  onChange={handleOptionChange}
          className="mr-2 appearance-none" /> Company 4</label>
            <label>
              <input type="radio" name="radio" id="company1" value={"company1"}  onChange={handleOptionChange}/>company1
            </label>

            <label>
              <input type="radio" name="radio" id="company2" value={"company2"}  /> company2
            </label>
         </ul>
    </div>
              <div className="text-center mb-6 pt-10">
                <button
                  type="submit"
                  className="w-full sm:w-full rounded-full bg-custom-blue px-3 py-4 text-white focus:bg-custom-pressed-green focus:outline-none font-semibold"
                >
                Sign Up
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
               Already have an account? 
                <Link
                  href={"/signin"}
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
  