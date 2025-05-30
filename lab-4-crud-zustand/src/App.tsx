import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import BlogListing from './pages/BlogListing'
import Add from './pages/Add'
import Edit from './pages/Edit'
import BlogDetail from './pages/BlogDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/blog' element={<BlogListing/>} />
          <Route path="/blog/:id" element={<BlogDetail />}/>
          <Route path='/blog/new' element={<Add />} />
          <Route path='/blog/edit/:id' element={<Edit />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App