"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Hidden } from "@mui/material";
import ReloadButton from '../ReloadButton';
import NewTable from "../newTable";

import axios from 'axios';

export default function Portal() {

  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCompanies, setSelectedCompanies] = useState(null);

  const handleCompanyChange = (e) => {
    setSelectedCompanies(e.target.value);
  };

  const [apiData, setApiData] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); 
  };


 useEffect(() =>{

  const token = localStorage.getItem('accessToken');

  const apiUrl = 'http://localhost:8000/api/v1/feedback/get-feedbacks-by-company-and-issue-category';
  const params = {
    isFixed: [false, true],
    date: selectedDate,
    companyName: ['Company1', 'Company2', 'Company3', 'Company4', 'EC'],
    issueCategory:  selectedCategory !== '' ? [selectedCategory] : [],
    // 
    // ['Issue 1','Issue 2', 'Issue 3', 'Issue 4']
  };

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
    console.log(selectedDate);

  })
  .catch((error) => {
    
    console.error('API error:', error);
  });


 }, [selectedCategory], [selectedCompanies]); 

 function handleLogout() {
  // Clear the token from local storage
  localStorage.removeItem('accessToken');

  // Redirect to the login page
  
  router.push('/signin'); // Adjust the route as needed.
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

         {/* CompanyFilterCategoryExpandable */}
         <div className="dropdown ">
        <label tabIndex={0} className="btn rounded-xl bg-custom-blue ml-5">Filter by Company</label>

          <div  tabIndex={0} className="dropdown-content flex z-[1000] menu p-2 shadow-xl bg-base-100 rounded-box w-full">
           
          <label className="my-2">
           <input type="radio" name='companySelect' value="Company1" id="Company1" onChange={handleCompanyChange}
           checked={selectedCompanies === 'Company1'} /> Company 1
          </label>
          
          <label className="my-2">
            <input type="radio" name='companySelect' value="Company2" id="Company2" onChange={handleCompanyChange}
            checked={selectedCompanies === 'Company2'}/>  Company 2
          </label>

          <label className="my-2">
            <input type="radio" name='companySelect' value="Company3" id="Company3" onChange={handleCompanyChange}
            checked={selectedCompanies === 'Company3'}/>  Company 3
          </label>

          <label className="my-2">
            <input type="radio" name='companySelect' value="Company4" id="Company4" onChange={handleCompanyChange}
            checked={selectedCompanies === 'Company4'}/>  Company 4
          </label>

          <label className="my-2">
            <input type="radio" name='companySelect' value="EC" id="EC" onChange={handleCompanyChange}
            checked={selectedCompanies === 'EC'}/>  EC
          </label>
          
          </div>
        </div>



        {/* <DatefilterExpandable/> */}
        <div  className="dropdown ">
            <label tabIndex={0} className="ml-5 btn rounded-xl bg-custom-blue">Filter by Date</label>

            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-23">
            <input className="rounded-full w-full" type="date" id='dateFilter'  value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}/>
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
            <input type="radio" name="cat" value="Issue 3" id="Issue 3"  checked={selectedCategory === 'Issue 3'} // Step 4
              onChange={handleCategoryChange}/>  Issue 3
          </label>

          <label className="my-2">
            <input type="radio" name="cat" value="Issue 4" id="Issue 4" checked={selectedCategory === 'Issue 4'} // Step 4
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

