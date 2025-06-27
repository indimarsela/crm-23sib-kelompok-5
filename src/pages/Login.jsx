// pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Contoh validasi sederhana (bisa diganti API nanti)
    if (!email || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    // Simulasi role
    const role = email === "admin@gmail.com" ? "admin" : "customer";

    const user = {
      email,
      role,
    };

    localStorage.setItem("user", JSON.stringify(user));
    setError(""); // reset error

    // Navigasi sesuai role
    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
