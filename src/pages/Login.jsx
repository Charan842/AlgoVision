import { useState } from "react";
import "../styles/login.css";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const ValidateLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    alert("Login Successful ✅");
    console.log(formData);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={ValidateLogin}>
        <h1>Welcome to the Login Page</h1>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;