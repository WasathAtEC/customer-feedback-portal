export default function CategoryFilterExpandable(){
    return(
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
    )
}