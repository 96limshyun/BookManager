import './App.css'
import { RouterProvider } from 'react-router-dom'

import { route } from './routers/routes'

function App() {

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
