"use client";
import React from "react";
import Navbar from "../navbar"
import Image from "next/image"
import { useEffect, useState } from 'react';
import axios from 'axios';

function ShowIssue({ searchParams }: {
  searchParams: {
    id: string;
  };
}) {

  // <h1>ID from URL: {searchParams.id}</h1>
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    name: '',
    issueCategory: '',
    message: '',
    imageUrl: '',
  });
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    // Fetch data from the API endpoint based on the 'id' from searchParams
    const fetchData = async () => {
      try {

        
        console.log(token);
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        console.log(searchParams.id);

        const id = searchParams.id;

        const response = await axios.get(`http://ec-api.czduhsdfatdud7bz.eastus.azurecontainer.io/api/v1/feedback/get-feedback-by-id/${id}`, {
          headers, // Include the headers in the request
        });
        
        console.log(response);

        // Update the state with the data
        setData({
          name: response.data.feedback.name,
          issueCategory: response.data.feedback.issueCategory,
          message: response.data.feedback.message,
          imageUrl: response.data.feedback.imageUrl,
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [searchParams.id]); // Run this effect whenever 'searchParams.id' changes


  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const messageData = {
      message: message,
    };

    const response = await fetch(`http://localhost:8000/api/v1/feedback/reply-feedback/${searchParams.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(messageData),
    });

    if (response.ok) {
      
      alert('Message sent successfully');
      
      setMessage('');
    } else {
      
      alert('Failed to send message');
    }
  };



  return (
    <div className="flex flex-col ">

<nav className="bg-custom-blue w-full">
        <div className="max-w-screen-xl flex items-center justify-end mx-auto p-5 text-center">
          
            
            <span className="self-center uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-nowrap dark:text-white">
              {data.name}
            </span>
        
        </div>
      </nav>
  
    {/* <h2>Name: {data.name}</h2>
      <p>Issue Category: {data.issueCategory}</p>
      <p>Message: {data.message}</p>
      
      <img src={data.imageUrl} alt="Issue Image" /> */}



<div className="  flex px-10 py-10">
    <div className="pr-10">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Issuer : {data.name}</h2>
    </div>

    <div className="px-10 ">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Category : {data.issueCategory}</h2>
    </div>
</div>

<div className=" flex px-10 py-5 ">
    <div className="">
     <h2 className="font-bold pr-10">Issue: </h2>
    </div>

    <div className="w-1/3 bg-blue-50 rounded-lg text-center p-3 ">
        <p>
        {data.message}
        </p>
    </div>

    <div className="pl-20  flex text-center" >
     <h2 className="font-bold pl-10">Screenshots: </h2>
    
    <div className="px-10">

    {/* {data.imageUrl ? (
  <Image alt="IssueImage" src={data.imageUrl} width={"500"} height={"100"} className="rounded-lg" />
) : (
  ``
)}     */}

    </div>

<Image alt="IssueImage" src={data.imageUrl} width={"500"} height={"100"}   className="rounded-lg" />
    
    </div>
</div>  

<div className="py-9  px-10  flex ">
    <div>
        <h1 className="font-bold">Solution</h1>
    </div>

<form action={""} className=" flex w-5/6 " onSubmit={handleSubmit}>
    <div className="w-full px-5">
   
    <textarea className="textarea textarea-info w-full " placeholder="Enter the Solution Here"
    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    </div>

    <div>
    <button
          name="sendBtn"
         type="submit"
         data-te-ripple-init
         data-te-ripple-color="light"
         className=" rounded-lg bg-custom-blue px-6 py-4 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
    Send
    </button>
    </div>
</form>
</div>


</div>
  );
}

export default ShowIssue;