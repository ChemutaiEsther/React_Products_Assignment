import { useState } from "react";
import { useNavigate } from "react-router"; 
import "../index.css"
function Signup (){
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Check if email already exists in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.email === form.email)) {
      setError("Email already registered. Please log in.");
      return;
    }
    
    // Store new user
    users.push({ name: form.name, email: form.email, password: form.password });
    localStorage.setItem("users", JSON.stringify(users));
    
    alert(`Account created for ${form.email}`);
    navigate("/login");
  }
return (
  <div className="auth-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input 
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
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
            minLength={6}
          />
        </label>

        <button type="submit">Create account</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>


)
}
export default Signup