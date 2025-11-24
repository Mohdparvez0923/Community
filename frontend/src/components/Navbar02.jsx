import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar02 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.clear()
    Navigate("/login")
  }

  return (
    <div className="p-1">
      <nav className="relative flex items-center  justify-between text-white bg-gray-800 rounded-t-2xl  py-5 px-15">
  
        <ul className="hidden md:flex text-medium">
          <li className="mx-3 hover:text-gray-300 cursor-pointer transition" onClick={()=>Navigate("/createPost")} >Create</li>
          <li className="mx-3 hover:text-gray-300 cursor-pointer transition" onClick={()=>Navigate("/post")}>Explore</li>
          <li className="mx-3 hover:text-gray-300 cursor-pointer transition" onClick={()=>Navigate("/chats")}>Chats</li>
        </ul>

    
        <h1
        onClick={()=>Navigate("/home")}
          className="text-3xl font-medium font-margarine absolute left-1/2 -translate-x-1/2"
          style={{ fontFamily: "Margarine" }}
        >
          Community
        </h1>

        
        <div className="hidden md:flex text-medium ">
          <button onClick={()=>Navigate("/profile")} className="mx-2 border border-white px-4  rounded-2xl hover:bg-white hover:text-gray-800 transition">
            Profile
          </button>
           <button onClick={handleLogout} className="mx-2 border border-white px-4 rounded-2xl hover:bg-white hover:text-gray-800 transition">
            Logout
          </button>
        </div>

  
        <button
          className="md:hidden text-3xl focus:outline-none z-20"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
 
      
        <div
          className={`absolute top-full left-0 w-full bg-gray-800 text-center rounded-b-2xl md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <ul className="flex flex-col space-y-3">
            <li className="hover:text-gray-300 cursor-pointer transition">Create</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Explore</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Connect +</li>
          </ul>
          <div className="flex flex-col space-y-3 mt-4">
            <button className="border border-white px-4 py-1 rounded-2xl hover:bg-white hover:text-gray-800 transition">
              Log in
            </button>
            <button className="border border-white px-4 py-1 rounded-2xl hover:bg-white hover:text-gray-800 transition">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar02;
