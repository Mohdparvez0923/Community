import { useState } from "react"
import { SignupUser } from "../api/axiosControllers"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'


const Signup = () => {

  const [fullName,setFullName] = useState("")
  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const Navigate = useNavigate()
  const submitHandler = async(e)=>{
    e.preventDefault()
   try {
     const data = await SignupUser(fullName,userName,email,password)
     toast.success('Signup successful!')
      // console.log("data taken line 17")
    if (data.success) {
      Navigate("/login")
      // console.log("navigate to login")
    }
   } catch (error) {
    toast.error("Signup failed!")
   }
  }
  
    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
  <form className="bg-gray-800/80 backdrop-blur-sm w-full max-w-md rounded-2xl text-center p-8 shadow-2xl border border-gray-700">
    <h1 className="text-4xl font-semibold text-white mb-6">Create Account</h1>

    <div className="space-y-4">
      <input
        type="text"
        className="w-full bg-gray-700/70 text-white tracking-wider placeholder-gray-300 py-3 px-4 rounded-lg outline-none border border-transparent focus:border-blue-400 transition-all duration-300"
        placeholder="Full Name"
        value={fullName}
        onChange={(e)=>setFullName(e.target.value)}
      />
      <input
        type="text"
        className="w-full bg-gray-700/70 text-white tracking-wider placeholder-gray-300 py-3 px-4 rounded-lg outline-none border border-transparent focus:border-blue-400 transition-all duration-300"
        placeholder="Username"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      <input
        type="email"
        className="w-full bg-gray-700/70 text-white tracking-wider placeholder-gray-300 py-3 px-4 rounded-lg outline-none border border-transparent focus:border-blue-400 transition-all duration-300"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full bg-gray-700/70 text-white tracking-wider placeholder-gray-300 py-3 px-4 rounded-lg outline-none border border-transparent focus:border-blue-400 transition-all duration-300"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>

    <button
    onClick={submitHandler}
      className="mt-6 w-full py-3 text-lg rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
      Create Account
    </button>
    <p onClick={()=>Navigate("/login")} className="mt-2 text-gray-400 hover:text-gray-300">Already have an account?</p>

  </form>
</div>
                                                                                                                                            
    )
}
export default Signup