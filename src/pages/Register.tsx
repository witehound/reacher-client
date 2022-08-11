import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, seFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleInputChange = (e : any) => {
    seFormData((prev) => ({...prev, [e.target.name] : e.target.value}))
  };
  const handeOnSubmit : any = (e : Event) => {
    e.preventDefault()
  };

  const { name, email, password, password2 } = formData;

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
              value={password}
              placeholder="confirm password"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
