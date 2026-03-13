import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

function Home() {
    const [blogs, setBlogs] = useState([])
    //from backend
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:3000/blog')
            setBlogs( response.data.data)
        }
        catch (error) {
            console.error('Error fetching blogs:', error)
        }
    }
    useEffect(() => {
        fetchBlogs()
    }, [])

  return (
    <div>
        <Navbar/>
        <div className='flex flex-wrap justify-center gap-4 mt-4'>
            {
                blogs.map((blog) => (
                    // <Card key={blog._id} title={blog.title} subtitle={blog.subtitle} description={blog.description} image={blog.image} />
                    <Card key={blog._id} blog={blog }/>
                ))
            }
        
        </div>
     
    </div>
  )
}

export default Home
