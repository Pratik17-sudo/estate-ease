import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-teal-100 to-slate-200 flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">Update Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={currentUser.username}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={currentUser.email}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter new password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition duration-300"
            >
              Update
            </button>

            {error && <span className="text-red-600 text-sm block mt-2">{error}</span>}
          </form>
        </div>

        {/* Avatar Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex flex-col justify-center items-center p-10">
          <img
            src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
            alt="avatar"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-6 transition-transform hover:scale-105"
          />
          <UploadWidget
            uwConfig={{
              cloudName: "dcmn0neha",
              uploadPreset: "estate",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
