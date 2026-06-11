import { useState } from "react";
import { useNavigate } from "react-router";
import "../index.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    
    if (!user) {
      setError("Invalid email or password");
      return;
    }
    
    // Save logged-in session
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));
    
    alert(`Logged in as ${form.email}`);
    navigate("/products");
  }

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Sign in</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
