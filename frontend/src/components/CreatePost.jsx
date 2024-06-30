
const CreatePost = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center">
        <form className="d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="userId">USER ID</label>
            <input type="number" placeholder="" id="userId"/>
            <label htmlFor="title">TITLE</label>
            <input type="text" placeholder="" id="title"/>
            <label htmlFor="body">BODY</label>
            <textarea cols={50} rows={3} type="text" placeholder="" id="body"/>
            <label htmlFor="reactions">REACTIONS</label>
            <input type="number" placeholder="" id="reactions"/>
            <label htmlFor="tags">TAGS</label>
            <input type="text" placeholder="" id="tags"/>
        </form>
    </div>
  )
}

export default CreatePost