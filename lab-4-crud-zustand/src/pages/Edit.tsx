import { Link, useNavigate, useParams } from "react-router-dom"
import { useBlogStore } from "../stores/post.store"
import { useState, type FormEvent } from "react"

const Edit = () => {
  const {editeBlog,getDetail} = useBlogStore()
  const {id} = useParams()
  const bData = getDetail(id)
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>(bData?.title || "")
  const [content, setContent] = useState<string>(bData?.content || "")
  const [published, setPublished] = useState<boolean>(!!bData?.publish)

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    editeBlog(id,{
      title:title, 
      content:content, 
      publish:published
    })
    navigate(`/blog/${id}`)
  }

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"flex-start", flexDirection: "column"}}>
        <label style={{marginRight: "10px"}}>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br/>
        <label style={{marginRight: "10px"}}>Content</label>
        <input type="text" value={content} onChange={(e)=>setContent(e.target.value)} />
        <br/>
        <label style={{marginRight: "10px"}}>Published</label>
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
        <button>Save updated</button>
      </form>
      <button><Link to="/blog" style={{fontSize:"30px", color:"white"}}>Blog List</Link></button>
    </div>
  )
}

export default Edit