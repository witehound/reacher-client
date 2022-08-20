import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Register, Login } from "./pages";
import { Header } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState<any>({});

  const tempUser = JSON.parse(localStorage.getItem("items") || "");
  useEffect(() => {
    if (tempUser) {
      setUser(tempUser);
    }
  }, []);

  return (
    <>
      {" "}
      <BrowserRouter>
        <Header setUser={setUser} user={user} />
        <Routes>
          {user ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Navigate to="login" />
          )}
          {!user && (
            <Route
              path="/signup"
              element={<Register setUser={setUser} user={user} />}
            />
          )}
          {!user ? (
            <Route path="/login" element={<Login />} />
          )
            : 
            (<Navigate to="/" />)
          }

          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
