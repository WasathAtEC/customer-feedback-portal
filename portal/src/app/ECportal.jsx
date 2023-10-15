import { Hidden } from "@mui/material";
import ExpandableTable from "./expandableTable/ExpandableTable";
import Navbar from "./navbar";
import NewTable from "./newTable";
import DatefilterExpandable from "./components/datefilterExpandabe";
import CompanyFilterExpandable from "./components/companyfilterExpandable";
import CategoryFilterExpandable from "./components/categoryFilterExpandable";

export default function ECportal() {

  const data = [
    {
      issuer: 'John Doe',
      category: 'Web Page Issue',
      date:'10/04/2023',
      message:'Yes',
      details: 'This content is Hidden.',          
      files:'yes',
    },
    {
      issuer: 'Jane Smith',
      category: 'Web Page Issue',
      date:'10/04/2023',
      message:'Yes',
      details: 'This content is Hidden.',          
      files:'yes',
    },
    {
      issuer: 'Jayed Ward',
      category: 'Web Page Issue',
      date:'11/04/2023',
      message:'Yes',
      details: 'This content is Hidden.',
      files:'yes',
    },
    {
      issuer: 'John Doe',
      category: 'Web Page Issue',
      date:'10/04/2023',
      message:'Yes',
      details: 'This content is Hidden.',          
      files:'yes',
    },
    {
      issuer: 'Jane Smith',
      category: 'Web Page Issue',
      date:'10/04/2023',
      message:'Yes',
      details: 'This content is Hidden.',          
      files:'yes',
    },
    {
      issuer: 'Jayed Ward',
      category: 'Web Page Issue',
      date:'11/04/2023',
      message:'Yes',
      details: 'This content is Hidden.',
      files:'yes',
    },
  ];


  return (
    <>
    <div className=" flex flex-col items-center  " style={{overflowX:Hidden}}>

      <Navbar/>
      <div className="w-5/6  flex flex-col pb-20">
        <div className="py-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Issue Portal</h1>
        </div>

        <div className="flex items-center ">
          

        <DatefilterExpandable/>
        <CompanyFilterExpandable/>
        <CategoryFilterExpandable/>

        </div>
      </div>

      <div className="  pb-10 ">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Recent Issues</h2>
      </div>
    
      <div className="flex justify-center items-center text-center h-full w-5/6">
      <NewTable data={data} />

      </div>

      <div className="pt-20 pb-5  ">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Solved Issues</h2>
      </div>

      <div className="flex justify-center  items-center text-center h-full w-full ">
      <ExpandableTable data ={data}/>

      </div>
    </div>
    </>
  );
}

