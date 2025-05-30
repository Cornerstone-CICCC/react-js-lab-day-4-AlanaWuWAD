import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h1>Welcome to My Blog</h1>
        <div style={{display:"flex", gap:"10px"}}>
            <button><Link to="/blog" style={{fontSize:"30px", color:"white"}}>Blog List</Link></button>
            <button><Link to="/blog/new" style={{fontSize:"30px", color:"white"}}>Add new</Link></button>
        </div>
    </>
  )
}

export default Home