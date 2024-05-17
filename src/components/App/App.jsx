import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={} />
          <Route path="/contacts" element={ } />
          <Route path="/registration" element={ } />
          <Route path="/login" element={ } />
          
        </Routes>
      </Layout>
    </>
  );
}

export default App;
