import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext.jsx";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-purple-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden w-[90%] max-w-5xl">
        {/* Image/Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-100 p-10">
          <img
            src="/bg.png"
            alt="Buildings"
            className="w-[80%] rounded-lg object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="flex flex-col justify-center px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome back
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            <input
              name="username"
              required
              minLength={3}
              maxLength={20}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <div className="text-sm text-center text-blue-600 hover:underline">
              <Link to="/register">Don’t have an account?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
