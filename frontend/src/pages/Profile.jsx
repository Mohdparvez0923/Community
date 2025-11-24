import { useState } from "react";
import Details from "../components/Details";
import Post from "../components/Post";
import { useEffect } from "react";


const Profile = ({ showNavbar = false}) => {

    const [activeTab, setActiveTab] = useState("posts");
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    let endpoint = " "

    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            const parsedUser = JSON.parse(storedUser)
            setUser(parsedUser)
        }
        setLoading(false)


    },[])
        if(loading) return <p>loading...</p>

    return (
        <div className="p-3 bg-gray-800">
            <div className="relative w-full -top-3">
                <img src="https://i.pinimg.com/736x/e9/34/d7/e934d7e916067d818d32ca8cba3063a8.jpg"
                    alt="cover image"
                    className="w-[80%] h-50 object-cover mx-auto border-white border-r-4 border-l-4 border-b-4 rounded-b-3xl"
                />

                <div className="absolute left-1/2 transform -bottom-20 -translate-x-1/2">
                    <img
                        src={user.pic}
                        alt="profile"
                        className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-lg "
                    />
                </div>
            </div>


            <div className="text-center mt-20 mb-2 text-white ">
                <h1 className="text-2xl">{user.username}</h1>
                <h1 className="text-lg font-light">@{user.name}</h1>
            </div>


            <div className="w-full flex justify-center text-center ">
                <div className=" bg-gray-600 flex flex-col  py-0.5  px-10 m-2 text-xl rounded-sm text-white hover:bg-gray-700">
                    <button className="tracking-wider" >Posts</button>
                    <span className="text-lg text-gray-300">(10)</span>
                </div>
                <div className=" bg-gray-600 flex flex-col py-0.5  px-10 m-2 text-xl rounded-sm text-white hover:bg-gray-700">
                    <button className="tracking-wider" >Followers</button>
                    <span className="text-lg text-gray-300">{user.followers.length}</span>

                </div>
                <div className=" bg-gray-600 flex flex-col  py-0.5 px-10 m-2 text-xl rounded-sm text-white hover:bg-gray-700">
                    <button className="tracking-wider" >Following</button>
                    <span className="text-lg text-gray-300">{user.following.length}</span>
                </div>
            </div>

            <div>


                <div className="flex mt-3 justify-center mb-6 space-x-2">
                    <button
                        onClick={() => setActiveTab("posts")}
                        className={`w-[400px] py-1 rounded-lg text-medium font-medium transition-all duration-200 ${activeTab === "posts"
                                ? "bg-blue-600 text-white shadow-md shadow-blue-900/30"
                                : "bg-gray-700 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                            }`}
                    >
                        Posts
                    </button>

                    <button
                        onClick={() => setActiveTab("details")}
                        className={`w-[400px] py-1 rounded-lg text-medium font-medium transition-all duration-200 ${activeTab === "details"
                                ? "bg-blue-600 text-white shadow-md shadow-blue-900/30"
                                : "bg-gray-700 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                            }`}
                    >
                        Details
                    </button>
                </div>

                {/* ---------------- Conditional Content ---------------- */}
                
                {activeTab === "posts" ? (
                    <div>
                        <div className="text-gray-300 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Posts Section</h2> 
                    </div>
                    <Post type="my" showNavbar ={false}/>
                    </div>
                ) : (
                   <div className="flex flex-col justify-center items-center w-full">
                     <div className="text-gray-300 text-center">
                        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
                    </div>
                    <Details/>
                   </div>
                    
                )}
            </div>
        </div>



    )
}
export default Profile