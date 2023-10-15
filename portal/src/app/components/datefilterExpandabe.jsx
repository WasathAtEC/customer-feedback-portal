export default function DatefilterExpandable(){

    return(
        
        <div  className="dropdown ">
            <label tabIndex={0} className="btn rounded-xl bg-custom-blue mr-5">Filter by Date</label>

            <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-23">
            <input className="rounded-full w-full" type="date"/>
        </div>
          </div>
    );
}