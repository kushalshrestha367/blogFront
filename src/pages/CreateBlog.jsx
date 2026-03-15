import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBlog() {
  const navigate = useNavigate()
    const [data, setData] = useState({
        title:'',
        subtitle:'',
        description:'',
        image:''    
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: name === "image" ? e.target.files[0] : value  
        })
    }
    // console.log(data);
    const createBlog = async(e) => {
       e.preventDefault()
       const response = await axios.post("https://blog-api-i6kb.onrender.com/blog",data,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
       })
       console.log(response);
       if(response.status === 200){
        navigate("/")
       }
       else{
        alert("Something went wrong")
       }
       
    }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Create New Blog
          </h1>

          <form className="space-y-5" onSubmit={createBlog} >
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
               Title
              </label>
              <input
                type="text"
                placeholder="Enter blog title"
                onChange={handleChange}
                name="title"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subtitle
              </label>
              <input
                type="text"
                placeholder="Enter subtitle"
                 onChange={handleChange}
                name="subtitle"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
              Description
              </label>
              <textarea
                placeholder="Write your blog content..."
                 onChange={handleChange}
                name="description"
                className="w-full border border-gray-300 rounded-md p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
               Image
              </label>
              <input
                type="file"
                onChange={handleChange}
                name="image"
                placeholder="Paste image URL"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Publish Blog
              </button>

              {/* <button
                type="button"
                className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
