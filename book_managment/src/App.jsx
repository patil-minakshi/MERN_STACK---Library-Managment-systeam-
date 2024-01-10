 

import React from "react"
import {Routes , Route} from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Editbook from './pages/Editbook'
import Createbook from './pages/Createbook'
import Delatebook from "./pages/Delatebook"
import Showbook from './pages/Showbook'

function App() {
  

  return (
    <Routes>
      <Route path="/" element ={<Homepage/>}/>
      <Route path="/books/create" element ={<Createbook/>}/>
      <Route path="/books/details/:id" element ={<Showbook/>}/>
      <Route path="/books/edit/:id" element ={<Editbook/>}/>
      <Route path="/books/delete/:id" element ={<Delatebook/>}/>
       
    </Routes>
    
  )
}

export default App
