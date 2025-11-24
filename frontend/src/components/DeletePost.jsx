import { useState } from "react";



const DeletePost=()=>{

  const [confirmDelete,setConfirmDelete] = useState(null)

    return(
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <h1>Are you sure?</h1>
            <button>Yes</button>
            <button>No</button>
        </div>
    )
}

export default DeletePost;