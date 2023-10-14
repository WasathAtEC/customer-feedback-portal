"use client";
import React, { useState } from 'react';
import Tabledata from './tableData';
import Showissue from '../showIssue/page';

const ExpandableTable = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <table className="table-auto border w-5/6 border-black rounded-lg">
      <thead>
        <tr>
          <th className="border border-black p-2">Date</th>
          <th className="border border-black p-2">Issuer</th>
          <th className="border border-black p-2">Category</th>
          <th className="border border-black p-2">Message</th>
          <th className="border border-black p-2">Files</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <React.Fragment key={index}>
            <tr onClick={() => handleRowClick(index)} className="cursor-pointer">
              <td className="border border-gray-400 p-2">{row.date}</td> 
              <td className="border border-gray-400 p-2">{row.issuer}</td>
              <td className="border border-gray-400 p-2">{row.category}</td>
              <td className="border border-gray-400 p-2">{row.message}</td>
              <td className="border border-gray-400 p-2">{row.files}</td>
            </tr>
            {expandedRow === index && (
              <tr>
                <td colSpan="5">
                <div  className=" bg-gray-200"> 
                    <div id='name'>
                        
                        <Showissue/>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ExpandableTable;