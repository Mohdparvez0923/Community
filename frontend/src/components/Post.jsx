import { useEffect, useState } from "react";
import { axiosPost } from "../api/axiosInstance";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";
import Navbar02 from "./Navbar02";


const Post = ({ type = "all", userId, showNavbar = true }) => {
  const [posts, setPosts] = useState([])
  const Navigate = useNavigate()
  const [selectedPost, setSelectedPost] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(null)

  const deleteConfirm = async (postId)=>{
      try {
        const token = localStorage.getItem("token")
        if(!token)return;

        const res = await axiosPost.delete(`/delete/${postId}`,{
          headers:{Authorization:`Bearer ${token}`}
        })

        setPosts((prev)=> prev.filter((p)=>p._id !== postId))

        setConfirmDelete(false)
        setPreviewImage(null)
        
      } catch (error) {
        console.log("error",error)
      }
  }


// --------------------------------------fetch posts ---------------------------------------
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) return Navigate("/login");
        let endpoint = ""

        if (type === "my") {
          endpoint = "/myPosts"
        } else if (type === "all") {
          endpoint = "/allPosts"
        } else {
          console.log("invalid post type", type)
        }
        const res = await axiosPost.get(endpoint,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        // console.log(res.data.Post || res.data.posts || [])
        setPosts(res.data.posts || [])
      } catch (error) {
        console.log("error while fetching posts", error)
      }
    }
    fetchPosts()
  }, [type, userId])

  return (
    <div className="p-1 bg-gray-900 min-h-screen">
      {showNavbar && <Navbar02 />}
      {posts.length === 0 ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="text-gray-400 text-lg">
            {type === "my"
              ? (
                <div className="flex flex-col">
                  You haven’t posted anything yet 📭
                  <button onClick={() => Navigate("/createPost")} className="bg-gray-600 rounded-lg my-5 py-2 hover:bg-gray-700 hover:text-gray-300">Create post</button>
                </div>
              )
              : "No posts available yet 😔"}
          </div>
        </div>
      ) : (<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-center">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md overflow-hidden w-[99%] mx-auto my-1" >
            <div onClick={() => setSelectedPost(post)} className=" -mb-4" >
              <img
                src={post.image}
                alt="Post visual"
                className="w-full h-52 object-contain bg-gray-800/90"
              />

              <div className="p-2">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={post.postedBy?.pic}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{post.postedBy?.username}</h3>
                    <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
                  </div>
                </div>

                <h2 className="font-bold text-medium mb-1 text-gray-900">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3">
                  {post.content}
                </p>
              </div>

            </div>
            {type === "my" && (
              <button
                onClick={() => setConfirmDelete(post._id)}
                className="mb-1 ml-2 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        ))}

      </div>)}

      {confirmDelete && (
        <div className="fixed inset-0  bg-black/50 backdrop-blur-sm flex  justify-center items-center z-50">
          <div className="flex flex-col justify-center items-center bg-gray-800 p-4 rounded-sm">
            <h1 className="text-white my-3">Are you sure?</h1>
            <div >
              <button onClick={()=>deleteConfirm(confirmDelete)} className="text-gray-300 border-1 mx-0.5 border-gray-600 px-10 rounded-sm font-light hover:bg-white hover:text-blue-500 hover:font-medium transition">Yes</button>
              <button onClick={()=>setConfirmDelete(false)} className="text-gray-300 border-1 mx-0.5 border-gray-600 px-10 rounded-sm font-light hover:bg-white hover:text-blue-500 hover:font-medium transition">No</button>
            </div></div>
        </div>
      )}

      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[90%] sm:w-[600px] h-[400px] rounded-xl  p-1 shadow-xl relative">

            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-2 right-3 py-0 text-xl text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>

            {/* Modal content */}
            <img
              src={selectedPost.image}
              onClick={() => setPreviewImage(selectedPost.image)}
              className="w-full h-56 object-contain bg-gray-900/80 rounded"
              alt=""
            />

            <div className="flex items-center gap-2 mx-3 my-3">
              <img
                src={selectedPost.postedBy?.pic}
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="-space-y-1">
                <h3 className="font-semibold text-gray-800">{selectedPost.postedBy?.username}</h3>
                <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(selectedPost.createdAt), { addSuffix: true })}</p>
              </div>
            </div>

            <div className="mt-3 mx-4">
              <h2 className="text-lg font-bold">{selectedPost.title}</h2>
              <p className="text-gray-700 text-sm mt-2">
                {selectedPost.content}
              </p>

            </div>
          </div>
        </div>)}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

          <img
            src={previewImage}
            alt="image"
          // className="max- max-h-[90%] rounded shadow-lg"
          />

          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setPreviewImage(null)}
          >
            ✕
          </button>
        </div>
      )}


    </div>

  );
};

export default Post;
