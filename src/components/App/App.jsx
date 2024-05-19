import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./App.css";
import Homepage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import ContactsPage from "../../pages/ContactsPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
