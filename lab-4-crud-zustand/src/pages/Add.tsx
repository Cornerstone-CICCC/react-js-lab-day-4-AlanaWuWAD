import { useEffect, useState, type FormEvent } from "react"
import { useBlogStore } from "../stores/post.store"
import { Link, useNavigate } from "react-router-dom"

const Add = () => {
    const {addBlog} = useBlogStore()
    const navigate = useNavigate()

    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [published, setPublished] = useState<boolean>(false)
    
    const resetField = ()=>{
        setTitle(""),
        setContent(""),
        setPublished(false)
    } 

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addBlog({title:title, content:content, publish:published})
        resetField()
        navigate("/blog")
    }

  return (
    <div>
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Title'/>
            <input type="text" value={content} onChange={(e)=> setContent(e.target.value)} placeholder='Content'/>
            <label> Published:
                <input type="checkbox" checked={published} onChange={(e)=> setPublished(e.target.checked)} placeholder='Title'/>
            </label>
            <button>Add Blog</button>
        </form>
        <button><Link to="/">Back to Home</Link></button>
        <button><Link to="/blog">Blog List</Link></button>
    </div>
  )
}

export default Add