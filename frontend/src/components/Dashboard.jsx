
const Dashboard = ({postList}) => {
  return (
    <div className="album py-5 bg-body-tertiary">
    <div className="container-fluid">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {postList.map((posts) => <div key={posts.id} className="col">
          <div className="card shadow-sm">
            <img src="https://www.blogtyrant.com/wp-content/uploads/2019/06/start-a-blog.png" alt="blog-img" />
            <div className="card-body">
              <small>User id: {posts.userId}</small>
              <h3 className="card-text">{posts.title}</h3>
              <p className="card-text">{posts.body}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  {posts.tags.map((tag, ind) => <button type="button" key={ind} className="btn btn-sm btn-outline-secondary">{tag}</button>)}
                  
                </div>
              </div>
                <small className="text-body-secondary">{posts.reactions.likes} Likes</small>
                <br />
                <small className="text-body-secondary">{posts.reactions.dislikes} Dislikes</small>
            </div>
          </div>
        </div>)}

      </div>
    </div>
  </div>
  )
}

export default Dashboard