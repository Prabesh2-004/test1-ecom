import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";
// import Signin from "./Pages/signin";

const App = () => {
  return (
    <div>
    <Layout>
        <Routes>
          {/* <Route path="/" element={<Signin />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Layout>
    </div>
  );
};

export default App;
