import Header1 from './Components/Header/Header1'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import './App.css'

function App() {

  return (
    <>
    <Header1></Header1>
   <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
   </div>
    </>
  )
}

export default App
