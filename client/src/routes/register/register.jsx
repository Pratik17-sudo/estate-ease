import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Form Section */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create an Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              disabled={isLoading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="hidden md:flex md:w-1/2 items-center justify-center p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src="/bg.png"
          alt="Skyscrapers"
          className="rounded-3xl shadow-xl w-[90%] h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Register;
