import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useState } from "react"

function App() {

  const [user, setuser] = useState(
    [
      {
        username: "vignesh",
        password: "1234"
      },
      {
        username: "abc",
        password: "123"
      }
    ]
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login user={user} setuser={setuser} />}></Route>
        <Route path='/signup' element={<Signup user={user} setuser={setuser} />}></Route>
        <Route path='/Landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
