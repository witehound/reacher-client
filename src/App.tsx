import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard, Register, Login} from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Dashboard />} />
        <Route path="/Register" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
