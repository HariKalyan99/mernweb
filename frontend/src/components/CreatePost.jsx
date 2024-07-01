import { useRef } from "react"

const CreatePost = ({addPosts}) => {


  const userIdRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");
  const reactionsRef = useRef("");
  const tagsRef = useRef("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdRef.current.value;
  const title = titleRef.current.value;
  const body = bodyRef.current.value;
  const reactions = reactionsRef.current.value;
  const tags = tagsRef.current.value;
    addPosts({userId,
      title,
      body,
      reactions,
      tags})
  }
  return (
    <div className="w-100 h-100 d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="userId">USER ID</label>
            <input type="number" placeholder="" id="userId" ref={userIdRef}/>
            <label htmlFor="title">TITLE</label>
            <input type="text" placeholder="" id="title" ref={titleRef}/>
            <label htmlFor="body">BODY</label>
            <textarea cols={50} rows={3} type="text" placeholder="" id="body" ref={bodyRef}/>
            <label htmlFor="reactions">REACTIONS</label>
            <input type="number" placeholder="" id="reactions" ref={reactionsRef}/>
            <label htmlFor="tags">TAGS</label>
            <input type="text" placeholder="" id="tags" ref={tagsRef}/>
            <button type="submit" className="btn btn-success">Add post</button>
        </form>
    </div>
  )
}

export default CreatePost