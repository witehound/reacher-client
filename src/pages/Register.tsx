import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { register } from "../api";

const Register = ({ setUser, user }: any) => {
  const [formData, seFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  ///comment
  
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    seFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handeOnSubmit: any = async (e: Event) => {
    e.preventDefault();
    if (password != password2) {
      toast.error("Passwords dont match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      const user = await register(userData);

      if (user.status == 200) {
        localStorage.setItem("items", JSON.stringify(user.data));
        setUser(user.data);
        navigate("/");
        toast.success("Succesfully registered");
      } else {
        toast.error("Failed to register user");
      }
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
          <p>Please create an account</p>
        </h1>
      </section>
      <section className="form">
        <form onSubmit={handeOnSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="name"
              onChange={handleInputChange}
            />
          </div>
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
            <input
              type="text"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="confirm password"
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

export default Register;
