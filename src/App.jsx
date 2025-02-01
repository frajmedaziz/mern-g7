import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// z-public
import Contact from "./z-public/pages/Contact";
import Dataset from "./z-public/pages/Dataset";
import Exercice from "./z-public/pages/Exercice";
import Home from "./z-public/pages/Home";
import  User from  "./z-public/pages/User";

// z-auth
import Signin from "./z-auth/pages/Signin";
import Signup from "./z-auth/pages/Signup";

// layouts
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import Dashboard from "./z-public/pages/Dashboard";
import ManageUser from "./z-public/pages/ManageUsers";
import Posts from "./z-public/pages/Posts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="exo" element={<Exercice />} />
          <Route path="dataset" element={<Dataset />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Posts" element={<Posts />} />
          <Route path="manage-users" element={<ManageUser />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Signin />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

