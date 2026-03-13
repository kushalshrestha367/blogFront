import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [blog,setBlog] = useState({
    title:'',
    subtitle:'',
    description:'',
    image:''
  })
 const handleChange = (e) => {
  const {name,value} = e.target
  setBlog({
    ...blog,
    [name]: name === "image" ? e.target.files[0] : value
  })
 }

 const editBlog = async(e) => {
   e.preventDefault()
   const response = await axios.patch(`http://localhost:3000/blog/${id}`, blog,{
    headers: {
      "Content-Type": "multipart/form-data"
    }
    
   }
 
  )
  
   console.log(response);
       if(response.status === 200){
        navigate("/blog/" + id)
       }
       else{
        alert("Something went wrong")
       }
   
 }

const fetchBlog = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/blog/${id}`)
    
    console.log(response.data)   
    
    setBlog({
      title: response.data.data.title || "",
      subtitle: response.data.data.subtitle || "",
      description: response.data.data.description || "",
      image: response.data.data.image || ""
    })
    
  } catch (error) {
    console.log(error)
  }
}
 useEffect(() => {
  fetchBlog()
 },[id])
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Edit Blog</h1>

          <form className="space-y-5" onSubmit={editBlog}>
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter blog title"
                name="title"
                onChange={handleChange}
                  value={blog.title}
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
                name="subtitle"
                value={blog.subtitle}
                  onChange={handleChange}
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
                name="description"
                  onChange={handleChange}
                 value={blog.description}
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
                name="image"
                placeholder="Paste image URL"
                  onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Update Blog
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

export default EditBlog;
