import React, {  use, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function SingleBlog() {
    const {id} = useParams()
    const [singleBlog, setSingleBlog] = useState({})
    const navigate = useNavigate()
    const fetchSingleBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/blog/${id}`)
            const data = response.data.data
            setSingleBlog(data)
        }
        catch (error) {
            console.error('Error fetching single blog:', error)
        }
    }
    const deleteBlog = async () => {

        try {
          
            await axios.delete(`http://localhost:3000/blog/${id}`)
                alert('Blog deleted successfully')
            navigate('/')
        }
        catch (error) {
            console.error('Error deleting blog:', error)
        }
    }

    useEffect(() => {
       fetchSingleBlog() 
    },[])
  return (
    <>
    <Navbar/>
     <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={`http://localhost:3000/${singleBlog.image}`}
            alt="blog cover"
            className="w-full h-100 object-contain"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {singleBlog.title}
            </h1>
            
            <h2 className="text-xl text-gray-600 mb-4">
              {singleBlog.subtitle}
            </h2>
            
   
            <p className="text-gray-700 leading-relaxed mb-6">
             {singleBlog.description}
            </p>
            
            <div className="flex gap-3">
              <button onClick={() => {}} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium">
                Edit Blog
              </button>
              <button onClick={deleteBlog} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-medium">
                Delete Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleBlog
