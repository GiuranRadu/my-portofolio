import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from './Components/AppLayout/AppLayout'
import PageNotFound from './Utils/PageNotFound'
import DashBoard from './Components/DashBoard/DashBoard'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound/>,
    children: [
      { path: '/', element: <DashBoard /> },      
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
