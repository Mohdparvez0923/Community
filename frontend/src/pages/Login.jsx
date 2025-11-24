import { useState } from "react"
import { loginUser } from "../api/axiosControllers"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'


const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const Navigate = useNavigate()

  const loginHandler = async(e)=>{
    e.preventDefault()
    if (!email || !password) {
      toast.error("Fill all the fields!")
    }

    try {
      const data = await loginUser(email,password)
      if (data && data.token) {
        localStorage.setItem("token",data.token),
        // console.log(data.token)
        localStorage.setItem("user",JSON.stringify(data.userFoundOrNot))
        toast.success("Login successful!")
        Navigate("/home")
      }else{
        toast.error(data.msg)
      }
    } catch (error) {
      toast.error("Login failed!")
    }
  }
    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
  <form className="bg-gray-800/80 backdrop-blur-sm w-full max-w-md rounded-2xl text-center p-8 shadow-2xl border border-gray-700">
    <h1 className="text-4xl font-semibold text-white mb-6">Welcome back</h1>

    <div className="space-y-4">
     
      <input
        type="email"
        className="w-full bg-gray-700/70 text-white placeholder-gray-300 tracking-widest py-2 px-4 rounded-lg outline-none border border-transparent focus:border-blue-400 transition-all duration-300"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full bg-gray-700/70 text-white placeholder-gray-300 tracking-widest py-2 px-4 rounded-lg outline-none border border-transparent focus:border-blue-400 transition-all duration-300"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>

    <button
    onClick={loginHandler}
      className="mt-6 w-full py-3 text-lg rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
      Login to continue
    </button>
    <p onClick={()=>Navigate("/signup")} className="mt-2 text-gray-400 hover:text-gray-300">Don't have an account?</p>
  </form>
</div>
                                                                                                                                            
    )
}
export default Login