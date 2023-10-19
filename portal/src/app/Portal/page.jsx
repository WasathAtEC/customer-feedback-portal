"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Hidden } from "@mui/material";
import ReloadButton from '../ReloadButton';
import NewTable from "../newTable";

import axios from 'axios';

export default function Portal() {

  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const [apiData, setApiData] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); 
  };


 useEffect(() =>{

  const token = localStorage.getItem('accessToken');

  const apiUrl = 'http://ec-api.czduhsdfatdud7bz.eastus.azurecontainer.io/api/v1/feedback/get-all-feedbacks';
  const params = {
    isFixed: [],
    
    issueCategory: selectedCategory !== '' ? [selectedCategory] : [],
  };

  if(selectedDate != null){
    params.date = convertDate(selectedDate);
  }

  const headers = {
    Authorization: `Bearer ${token}`, 
  } ;

  axios
  .get(apiUrl, {
    params: params,
    headers: headers,
  })
  .then((response) => {
   
    console.log('API response:', response.data.feedbacks);
    setApiData(response.data.feedbacks);
   
    console.log('API Feedbacks response',response.data.feedbacks);
    



  })
  .catch((error) => {
    
    console.error('API error:', error);
  });


 }, [selectedDate, selectedCategory] ); 

 function handleLogout() {
  // Clear the token from local storage
  localStorage.removeItem('accessToken');

  // Redirect to the login page
  
  router.push('/signin'); 
}
  console.log(selectedDate);


function convertDate(inputDate) {
  const dateParts = inputDate.split('-');
  
  if (dateParts.length === 3) {
    // Rearrange the date parts to the desired format (MM/DD/YYYY)
    const formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    return formattedDate;
  } else {
    return "Invalid date format";
  }
}


  
  return (
    <>
    <div className=" flex flex-col items-center  " style={{overflowX:Hidden}}>
      
    <nav className="bg-custom-blue w-full">
        <div className="max-w-screen-xl flex items-center justify-end mx-auto p-5 text-center">
        <button className='btn rounded-xl bg-red-500' onClick={handleLogout}>Log Out</button>
        </div>
      </nav>

      <div className="w-5/6  flex justify-between pt-10 pb-20">
        <div className="py-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Issue Portal</h1>
        </div>

        <div className="flex items-center ">
          
         <ReloadButton/>

        {/* <DatefilterExpandable/> */}
        <div  className="dropdown ">
            <label tabIndex={0} className="ml-5 btn rounded-xl bg-custom-blue ">Filter by Date</label>

            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-23">
            <input className="rounded-full w-full" type="date" id='dateFilter'  value={(selectedDate)  || ''}
          onChange={(e) => setSelectedDate(e.target.value || '')}/>
        </div>
          </div>



        {/* <CategoryFilterExpandable/> */}
        <div className="dropdown ">
        <label tabIndex={0} className="ml-5 btn rounded-xl bg-custom-blue">Filter by Category</label>

          <div  tabIndex={0} className="dropdown-content flex z-[1000] menu p-2 shadow-xl bg-base-100 rounded-box w-full">

          <label className="my-2">
           <input type="radio" name="cat" value="Issue 1" id="Issue 1" checked={selectedCategory === 'Issue 1'} 
              onChange={handleCategoryChange}/> Issue 1
          </label>
          
          <label className="my-2">
            <input type="radio" name="cat" value="Issue 2" id="Issue 2" checked={selectedCategory === 'Issue 2'} 
              onChange={handleCategoryChange} />  Issue 2
          </label>  

          <label className="my-2">
            <input type="radio" name="cat" value="Issue 3" id="Issue 3"  checked={selectedCategory === 'Issue 3'} 
              onChange={handleCategoryChange}/>  Issue 3
          </label>

          <label className="my-2">
            <input type="radio" name="cat" value="Issue 4" id="Issue 4" checked={selectedCategory === 'Issue 4'} 
              onChange={handleCategoryChange}/>  Issue 4
          </label>

          </div>
        </div>




        </div>
      </div>

      

      <div className="flex justify-center items-center text-center h-full w-5/6">
      <NewTable data={apiData} />

      </div>

    
    </div>
    </>
  );
}

