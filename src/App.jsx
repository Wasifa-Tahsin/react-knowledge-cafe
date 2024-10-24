

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 
  // bookmark adding
const [bookmarks,setBookmarks]=useState([])
const [reading,setReading]=useState(0)


// bookmarks
const handleAddToBookmark=(blog)=>{
  const newBookmarks=[...bookmarks,blog]
  setBookmarks(newBookmarks);
}

// markAsRead
const handleMarkAsRead=(time)=>{
  const newReadingTime=(reading+time)
setReading(newReadingTime);
}
  return (
    <>
      
     <Header ></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} ></Blogs>
     <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
     </div>
      
     
    </>
  )
}

export default App
