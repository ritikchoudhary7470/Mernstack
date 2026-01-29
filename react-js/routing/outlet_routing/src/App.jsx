import Home from './components/Home'
import About from './components/About'
import AppLayout from './components/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    
    children: [
      {
        index: true,       
        element: <Home />
      },
      {
        path: 'about',    
        element: <About />
      }
    ]
  }
])

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
