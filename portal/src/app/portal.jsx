import ExpandableTable from "./expandableTable/ExpandableTable";
import Navbar from "./navbar";
import NewTable from "./newTable";

export default function Portal() {

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
    <div className=" flex flex-col items-center  ">

      <Navbar/>
      <div className="w-5/6  flex flex-col pb-20">
        <div className="py-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Issue Portal</h1>
        </div>

        <div className="flex items-center ">
          

        <div  className="dropdown ">
            <label tabIndex={0} className="btn rounded-xl bg-custom-blue">Filter by Date</label>

            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-23">
            <input className="rounded-full w-full" type="date"/>
        </div>
          </div>

          <div className="dropdown px-2">
          <label tabIndex={0} className="btn rounded-xl bg-custom-blue">Filter by Company</label>

            <div  tabIndex={0} className="dropdown-content flex z-[1000] menu p-2 shadow-xl bg-base-100 rounded-box w-full">
             
            <label className="my-2">
             <input type="checkbox" value="Sample Text" /> Company 1
            </label>
            
            <label className="my-2">
              <input type="checkbox" value="Sample Text" />  Company 2
            </label>

            <label className="my-2">
              <input type="checkbox" value="Sample Text" />  Company 2
            </label>
            
            </div>
          </div>

          <div className="dropdown px-2">
          <label tabIndex={0} className="btn rounded-xl bg-custom-blue">Filter by Category</label>

            <div  tabIndex={0} className="dropdown-content flex z-[1000] menu p-2 shadow-xl bg-base-100 rounded-box w-full">

            <label className="my-2">
             <input type="radio" name="cat" value="cat1" id="cat1" /> Category1
            </label>
            
            <label className="my-2">
              <input type="radio" name="cat" value="cat2" id="cat2" />  Category2
            </label>  

            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center text-center h-full w-full">
      <ExpandableTable data={data} />

      </div>

      <div className="pt-20 pb-5  ">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Solved Issues</h2>
      </div>

      <div className="flex justify-center items-center text-center h-full w-full ">
      <NewTable data ={data}/>

      </div>
    </div>
    </>
  );
}

