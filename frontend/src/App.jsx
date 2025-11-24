

import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';   
import { ToastContainer } from 'react-toastify'
import Profile from './pages/profile'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import ProtectedRoute from './components/ProtectedRoute'
import DeletePost from './components/DeletePost'
import Connect from './components/Connect'
import Chats from './components/Chats'


function App() {


  return (
    <>
      <div className='bg-gray-600'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>} />
            <Route path="/post" element={
              <ProtectedRoute>
              <Post/>
            </ProtectedRoute>} />
            <Route path="/createPost" element={
              <ProtectedRoute>
              <CreatePost/>
            </ProtectedRoute>} />
            <Route path="/connect" element={
              <ProtectedRoute>
              <Connect/>
            </ProtectedRoute>} />
            <Route path="/chats" element={
              <ProtectedRoute>
              <Chats/>
            </ProtectedRoute>} />
             <Route path="/post/:_id" element={
              <ProtectedRoute>
              <DeletePost/>
            </ProtectedRoute>} />
          </Routes>

          
      </BrowserRouter>    
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      /> 
      </div>
    </>
  )
}

export default App
