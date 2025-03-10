import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  const [existingUser, setExistingUser] = useState();

  useEffect(() => {
    setExistingUser(localStorage.getItem("user"));
  });

  console.log(signedIn);

  return (
    <Layout setSignedIn={setSignedIn} signedIn={signedIn}>
      <Routes>
        <Route
          path="/"
          element={
            signedIn ? (
              <Welcome />
            ) : (
              <Login setSignedIn={setSignedIn} existingUser={existingUser} />
            )
          }
        />
        <Route
          path="login"
          element={
            <Login setSignedIn={setSignedIn} existingUser={existingUser} />
          }
        />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
