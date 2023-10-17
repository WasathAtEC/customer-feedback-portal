"use client";
import Link from 'next/link';
import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { ViewDay } from '@mui/icons-material';

        //<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 bg-green-400 ">

const NewTable = ({data}) => {
  return (
    <div className='w-full'>

<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8  ">
      
                <div class="align-middle inline-block w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table class="min-w-full table-auto">
                        <thead>
                            <tr >
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-center leading-4 text-blue-500 tracking-wider">#</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Date</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Company</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Name</th>
                                
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Issue Category
</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                
                                <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            {data.map((row,index) => (
                                
                                <React.Fragment key={index}>
                                <tr >
                                    
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div class="flex items-center">
                                            <div>
                                                <div class="text-sm leading-5 text-gray-800">{index +1}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div class="text-sm leading-5 text-blue-900">{row.date}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{row.company}</td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{row.name}</td>
                              
                                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{row.issueCategory}</td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span class={"relative inline-block px-3 py-1 font-semibold text-${row.isFixed ? 'green':'red'}-900 leading-tight"}>
                                        <span aria-hidden class="absolute inset-0 rounded-full" style={{background:row.isFixed ? 'green' : 'red', opacity:0.2,}} ></span>
                                        <span class="relative text-xs">{row.isFixed ? 'fixed':'pending'}</span>
                                    </span>
                                    </td>
                                    
                                    <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                     <Link href={`/showIssue?id=${row._id}`} >  

                                     <button id='viewDetails' class="px-5 py-2 bg-custom-blue  text-white rounded-box transition duration-300 hover:bg-custom-green hover:text-white focus:outline-none " >View Details</button>
                                     </Link> 
                                 
                                    </td>
                                    {/* href="/showIssue/[id]" as={`/showIssue/${row.id}`} */}
                          </tr>
                          </React.Fragment>
                            ))}
                   
           
                    
                        </tbody>
                    </table>
                  <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
  
        <div>
            
        </div>
    </div>
                </div>
            </div>
    </div>
  )
}

export default NewTable;