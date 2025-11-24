import { useRef, useState } from "react";
import { axiosPost } from "../api/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const formRef = useRef(null);
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const Navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

      if (!title.trim() || !content.trim() || !image) {
    toast.error("Please fill all fields!");
    setLoading(false);
    return; 
  }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "community")
    console.log(formData)

    try {

      const res = await axios.post("https://api.cloudinary.com/v1_1/prvz/image/upload", formData)
      const token = localStorage.getItem("token");
      console.log(res.data)
      const imageUrl = res.data.secure_url

      const apiResponse = await axiosPost.post("/create",
        {
          title,
          content,
          image: imageUrl
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      toast.success('Post created!')
      setTitle("")
      setContent("")
      setImage(null)
      formRef.current.reset()
     

    } catch (error) {
      console.log("error", error)
    }finally{
       setLoading(false)
    }
  }

  return (
    <div className="flex justify-center px-2 py-8 bg-gray-800 min-h-screen">
      <form ref={formRef}>
        <div className="w-full min-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-lg">

        {/* -----------------------------------------Heading----------------------------------------- */}
        <h2 className="text-2xl font-semibold text-gray-100 mb-4      text-center">
          Create a Post
        </h2>

        {/*----------------------------------------- File Upload----------------------------------------- */}
        <div className="border-2 border-dashed  border-gray-600 hover:border-blue-500 transition rounded-xl flex items-center justify-center h-22 mb-3 bg-gray-800 cursor-pointer">
          {/* <label
            htmlFor="file-upload"
            className="flex flex-col items-center w-full h-full justify-center text-gray-300 font-medium text-lg cursor-pointer"
          >
            <span>Upload an image or file</span>
          </label> */}
          <input id="file-upload" type="file" onChange={(e) => setImage(e.target.files[0])} className="text-gray-200 " />
        </div>

        {/* -----------------------------------------Title----------------------------------------- */}
        <div className="mb-5">
          <label className="block text-medium font-medium text-gray-300 ml-2 text-left mb-2">
            Title
          </label>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full bg-gray-800  text-gray-100 placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-900/40 rounded-lg py-2 px-4 outline-none transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* -----------------------------------------Content----------------------------------------- */}
        <div className="mb-6">
          <label className="block text-medium font-medium text-gray-300 text-left ml-2 mb-2">
            Content
          </label>
          <textarea
            rows="5"
            placeholder="Write something to share with the community..."
            className="w-full bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-900/40 rounded-lg py-2 px-4 outline-none resize-none transition"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* ------------------------------------Button------------------------------------ */}
       <div className="space-y-2">
         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-medium font-semibold py-2 rounded-lg shadow-md shadow-blue-900/30 transition"
          onClick={submitHandler}
        >
          Post to Community
        </button>

        <button onClick={()=>Navigate("/home")} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-medium font-semibold py-2 rounded-lg shadow-md shadow-blue-900/30 transition">
          Go back to home
        </button>
       </div>
      </div>
      </form>
    </div>
  );
};

export default CreatePost;
