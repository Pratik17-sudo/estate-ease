import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import { Link, useLoaderData, useNavigate, Await } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function ProfilePage() {
  const data = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen flex flex-col md:flex-row p-4">
      {/* User Details Section */}
      <div className="w-full md:w-2/3 p-4">
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">User Information</h1>
            <Link to="/profile/update">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Update Profile
              </button>
            </Link>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-medium">Avatar:</span>
              <img
                src={currentUser.avatar || "/Noavatar.jpg"}
                alt="Avatar"
                className="w-12 h-12 rounded-full border"
              />
            </div>
            <div>
              <span className="font-medium">Username: </span>
              <b>{currentUser.username}</b>
            </div>
            <div>
              <span className="font-medium">E-mail: </span>
              <b>{currentUser.email}</b>
            </div>
            <button
              onClick={handleLogout}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>

          {/* My List */}
          <div className="flex items-center justify-between pt-6">
            <h1 className="text-xl font-semibold">My List</h1>
            <Link to="/add">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Create New Post
              </button>
            </Link>
          </div>
          <Suspense fallback={<p className="text-sm">Loading posts...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p className="text-red-500">Error loading posts!</p>}
            >
              {(postResponse) => (
                <List posts={postResponse.data.userPosts} />
              )}
            </Await>
          </Suspense>

          {/* Saved List */}
          <div className="pt-6">
            <h1 className="text-xl font-semibold mb-2">Saved List</h1>
            <Suspense fallback={<p className="text-sm">Loading saved posts...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p className="text-red-500">Error loading saved posts!</p>}
              >
                {(postResponse) => (
                  <List posts={postResponse.data.savedPosts} />
                )}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white shadow-lg rounded-2xl h-full p-4 border border-indigo-200">
          <Suspense fallback={<p className="text-sm">Loading chats...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p className="text-red-500">Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
