import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, seFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    seFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handeOnSubmit: any = (e: Event) => {
    e.preventDefault();
  };

  const { email, password } = formData;

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
