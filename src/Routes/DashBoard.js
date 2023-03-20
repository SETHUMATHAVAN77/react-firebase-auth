import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      {
        const timeOut = setTimeout(() => {
          navigate("/signup");
        }, 5000);
        return () => clearTimeout(timeOut);
      }
    }
  }, [id]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setId(user.uid);
      } else {
        setId("");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setId("");
        // console.log("signed out successfully");
      })
      .catch((err) => {
        // an error happened
        console.log(err);
      });
  };

  if (!id) {
    return (
      <div>
        <h2>Not signed In/ Signed out</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>{id}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashBoard;
