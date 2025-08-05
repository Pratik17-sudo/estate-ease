import Navbar from "../../components/navbar/Navbar"
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


function Layout() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="flex-1 min-h-0">
        <Outlet/>
      </div>
    </div>
  );
}


function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="flex-1 min-h-0">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };