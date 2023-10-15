export default function CategoryFilterExpandable(){
    return(
        <div className="dropdown ">
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
    )
}