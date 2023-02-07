import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Layouts/AppLayout'
import Home from './pages/HomePage/Home'
import VideoPage from './pages/VideoPage/VideoPage'

function App() {

  const router  =  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='movies'>
          <Route path=':id' element={<VideoPage/>}/>
        </Route>
      </Route>
    )
  )
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
