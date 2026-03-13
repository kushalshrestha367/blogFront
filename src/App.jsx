import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'

function App() {
  

  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path='/edit/:id' element={<EditBlog/>} />

        </Routes>
      </BrowserRouter>
  
  )
}

export default App
