import { Link, useParams } from "react-router-dom"
import { useBlogStore } from "../stores/post.store"

const BlogDetail = () => {
  const {getDetail} = useBlogStore()
  const {id} = useParams()
  const bDetial = getDetail(id)

  return (
    <div>
      <h2>Blog Detail</h2>
      <fieldset style={{margin:"10px"}}>
        <p>Title: {bDetial?.title}</p>
        <p>Context: {bDetial?.content }</p>
        <p>Published: {bDetial?.publish?"Yes":"No"}</p>
      </fieldset>
      <Link to='/' style={{border:"1px solid yellow", padding:"5px", backgroundColor:"black", color:"white"}}>Back to Home</Link>
      <Link to='/blog' style={{border:"1px solid yellow", padding:"5px", backgroundColor:"black", color:"white"}}>Blog List</Link>
    </div>
  )
}

export default BlogDetail