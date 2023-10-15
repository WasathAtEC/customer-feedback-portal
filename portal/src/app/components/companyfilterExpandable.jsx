export default function CompanyFilterExpandable(){
    return(
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
    );
}