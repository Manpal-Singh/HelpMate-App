import Header from "./Components/Header/Header";
import LogoutPopup from "./Components/Auth/Logout";
import Footer from "./Components/Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    setLogoutOpen(false);
    toast.success("Logged out successfully 👋");
    navigate("/login");
  };

  return (
    <>
      <Header onLogoutClick={() => setLogoutOpen(true)} />
      <Outlet />
      <Footer />

      <LogoutPopup
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={handleLogout}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
