import Header from "./Components/Header/Header";
import LogoutPopup from "./Components/Auth/Logout";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleLogout = () => {
    setLogoutOpen(false);
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
