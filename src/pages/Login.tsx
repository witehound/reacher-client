import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setUser, user }: any) => {
  const [formData, seFormData] = useState({
    email: "",
    password: "",
  });

  const { password , email } = formData

  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    seFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handeOnSubmit: any = async (e: Event) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    const user = await loginUser(userData);
    if (user.status == 200) {
      localStorage.setItem("items", JSON.stringify(user.data));
      setUser(user.data);
      navigate("/");
      toast.success("Succesfully registered");
    } else {
      toast.error("Failed to register user");
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
          <p>Login and start reaching goals</p>
        </h1>
      </section>
      <section className="form">
        <form onSubmit={handeOnSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="email@gmail.com"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
