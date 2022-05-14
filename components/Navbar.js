import Link from "next/link";

const Navbar = () => {
    return ( 
    <nav className="container flex justify-around py-8 mx-auto bg-white">
        {/* LoGo */}
        <div className="flex items-center">
             <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
        </div>
         {/* <!-- middle nav  section --> */}
        <div className="items-center hidden space-x-8 lg:flex">
            <Link href="/"><a className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300">Home</a></Link>
            <Link href="/about" ><a className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300">About</a></Link>
            <Link href="/products"><a className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300">Products</a></Link>
        </div>
         {/* <!-- right nav section --> */}
        <div className="flex items-center space-x-2">
            <a href="#">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
            </svg>
            </a>
            
            <a href="#" className="p-2 rounded-full bg-blue-50">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>
            </a>
        </div>
  
    </nav>               
        
    );
}
 
export default Navbar;