// // "use client";

// import { useRouter } from 'next/navigation';
// // import Navbar from "../navbar"
// // import Image from "next/image"


// export default function Showissue(){

//     const router = useRouter();
//     const { id } = router.query;

//     return(
// <div>
//         <h1>Show Issue Page</h1>
//       <p>Issue ID: {id}</p>
//       {/* Fetch and display issue details using the 'id' */}
// </div>

//         // <div className="flex flex-col ">

//         //     <p>Issue ID: {id}</p>

//         //     <Navbar/>
//         // <div className="  flex px-10 py-10">
//         //     <div className="pr-10">
//         //         <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Issuer : Name</h2>
//         //     </div>

//         //     <div className="px-10 ">
//         //         <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl">Category : Webpage Issue</h2>
//         //     </div>
//         // </div>

//         // <div className=" flex px-10 py-5 ">
//         //     <div className="">
//         //      <h2 className="font-bold pr-10">Issue: </h2>
//         //     </div>

//         //     <div className="w-1/3 bg-blue-50 rounded-lg text-center p-3 ">
//         //         <p>
//         //         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
//         //         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
//         //         sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
//         //         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
//         //         dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
//         //         incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
//         //          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
//         //           vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
//         //            dolorem eum fugiat quo voluptas nulla pariatur
//         //         </p>
//         //     </div>

//         //     <div className="pl-20  flex text-center" >
//         //      <h2 className="font-bold pl-10">Screenshots: </h2>
            
//         //     <div className="px-10">
//         //     <Image src="/byH.png" width={"500"} height={"100"}  className="rounded-lg"/>
//         //     </div>
            
//         //     </div>
//         // </div>  

//         // <div className="py-9  px-10  flex ">
//         //     <div>
//         //         <h1 className="font-bold">Solution</h1>
//         //     </div>

//         // <form action={""} className=" flex w-5/6 ">
//         //     <div className="w-full px-5">
//         //     <textarea className="textarea textarea-info w-full " placeholder="Enter the Solution Here"></textarea>
//         //     </div>

//         //     <div>
//         //     <button
//         //          type="submit"
//         //          data-te-ripple-init
//         //          data-te-ripple-color="light"
//         //          class=" rounded-lg bg-custom-blue px-6 py-4 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
//         //     Send
//         //     </button>
//         //     </div>
//         // </form>
//         // </div>


//         // </div>
//     )
// }