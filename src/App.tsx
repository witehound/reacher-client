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
          <Route
            path="/"
            element={user ? <Dashboard user={user} /> : <Navigate to="login" />}
          />
          <Route
            path="/signup"
            element={
              !user ? (
                <Register setUser={setUser} user={user} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
