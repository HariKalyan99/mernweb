import { useEffect, useState } from "react"
import BlogsPage from "./pages/BlogsPage"
import CreateBlogsPage from "./pages/CreateBlogsPage"
import axios from 'axios'

function App() {


  const [displaySight, setDisplaySight] = useState("blogsPost");
  const [postList, setPostList] = useState([]);
  const [addPostObj, setAddPostObj] = useState({}); 
  const [delId, setDelId] = useState({});
  const [updatePostObj, setUpdatePostObj] = useState({})  

  const display = (value) => {
    setDisplaySight(value);
  }

  useEffect(() => {
    let controller = new AbortController();
    let {signal} = controller;
    const fetchPosts = async() => {
      try {
        const {data} = await axios.get('http://localhost:9091/posts', {signal});
        setPostList(data);
      } catch (error) {
        console.log("Error", error)
      }
    }

    fetchPosts();

    return () => {
      controller.abort();
    }
  }, [])


  useEffect(() => {
    const addPostToDb = async({userId, title, body, reactions, tags}) => {
      try {
        const {data} = await axios.post('http://localhost:9091/posts', {
          userId, title, body, reactions, tags,
          views: 100,
        })
      } catch (error) {
        console.log("Error", error)
      }
    }

    if(addPostObj?.title){
      addPostToDb(addPostObj)
    }
  }, [addPostObj])

  const addPosts = (newPost) => {
    setAddPostObj(newPost)
  }

  
  const deletePosts = (id) => {
    console.log(id)
  }

  
  const editPosts = (updatedPost) => {
    console.log(updatedPost)
  }
  return (
   <div>
    {displaySight === "blogsPost" ? <BlogsPage display={display} displaySight={displaySight} postList={postList}/> :
    <CreateBlogsPage display={display} displaySight={displaySight} addPosts={addPosts}/>}
   </div>
  )
}

export default App
