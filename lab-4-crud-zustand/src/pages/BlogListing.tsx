import { Link } from "react-router-dom"
import { useBlogStore } from "../stores/post.store"

const BlogListing = () => {
  const {blogs,deleteBlog} = useBlogStore()

  return (
    <div>
      <h2>Blog List</h2>
      <ul style={{margin:"1rem"}}>
        {blogs.map(b => (
          <li key={b.id} style={{padding:"5px", fontSize:"1.5rem"}}>
            Title : {b.title}
              <button style={{padding:"2px", fontSize:"20px",margin:"5px",color:"white"}}><Link to={`/blog/${b.id}`}>Detail</Link></button>
              <button style={{padding:"2px", fontSize:"20px",margin:"5px",color:"white"}}><Link to={`/blog/edit/${b.id}`}>Edit</Link></button>
              <button onClick={()=>deleteBlog(b.id)} style={{padding:"2px", fontSize:"20px",margin:"5px"}}>Delete</button>
          </li>
        ))}
      </ul>
      <button><Link to="/" style={{fontSize:"20px", color:"white"}}>Back to Home</Link></button>
      <button><Link to="/blog/new" style={{fontSize:"20px", color:"white"}}>Add New</Link></button>
    </div>
  )
}

export default BlogListing