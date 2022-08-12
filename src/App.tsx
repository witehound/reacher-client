import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard, Register, Login } from "./pages"
import { Header } from "./components"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
