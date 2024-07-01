import CreatePost from "../components/CreatePost"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


const CreateBlogsPage = ({display, displaySight, addPosts}) => {
  return (
    <div>
        <Navbar />
        <div className="d-flex">
        <CreatePost addPosts={addPosts}/>
        <Sidebar display={display} displaySight={displaySight}/>
        </div>
        <Footer />
    </div>
  )
}

export default CreateBlogsPage