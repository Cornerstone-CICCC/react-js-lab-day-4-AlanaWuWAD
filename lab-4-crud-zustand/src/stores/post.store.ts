import {create} from "zustand"
import { v4 as uuidv4 } from "uuid";

type Blog = {
    id:string,
    title:string,
    content: string,
    publish: boolean
}

type BlogStoreState ={
    blogs:Blog[],
    addBlog: (newBlog: Omit<Blog,"id"> ) => void,
    getDetail: (id:string) => Blog | null,
    deleteBlog: (id:string) => void,
    editeBlog: (id:string, blogData: Partial<Blog>) => void
}

export const useBlogStore = create<BlogStoreState>((set, get)=>({
    blogs:[],
    addBlog: (newBlog) => {
        const newContent = {...newBlog, id:uuidv4()}
        set((state) => ({blogs:[...state.blogs, newContent]}))
    },
    getDetail: (id) => {
        const found = get().blogs.find((b) => b.id === id)
        if(!found) return null
        return found
    },
    deleteBlog: (id) => {
        set((state)=>({
            blogs:state.blogs.filter((b)=> b.id !== id)
        }))
    },
    editeBlog: (id, blogData) => {
        set((state)=>({
            blogs:state.blogs.map((b)=> b.id === id ? {...b, ...blogData}:b)
        }))
    }
    
}))


