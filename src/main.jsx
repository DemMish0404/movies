import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignIn from './components/SignIn.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header1 from './components/Header1.jsx'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import FirstPage from './FirstPage'
import TrailerPreview from './components/TrailerPreview'

const router = createBrowserRouter([
    {
        path: '/',
        element: <FirstPage howManyDislikes={'14'} howManyLikes={'12'}  />
    },
    {
        path: '/checkBox',
        element: <SignIn />
    }
    ,
    {
        path: '/checkingMistakes',
        element: <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'}/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
