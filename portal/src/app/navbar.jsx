export default function Navbar(){

    return(
        <nav className="bg-custom-blue w-full">
        <div className="max-w-screen-xl flex items-center justify-end mx-auto p-5 text-center">
          <a href="" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="user photo" />
            <span className="self-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-nowrap dark:text-white">
              User 1
            </span>
          </a>
        </div>
      </nav>
    )
}