import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        // sign in
        // const user = userCredential.user;
        // console.log(user);
        navigate("/login");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          alert("Email already exists ");
        } else {
          console.log(err);
        }
      });
  };
  return (
    <main>
      <section>
        <div>
          <h1>FocusApp</h1>
          <form>
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                type="email"
                label="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="EAmail  address"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                label="create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <button type="submit" onClick={onSubmit}>
              Sign up
            </button>
            <p>
              Already have an account ?<NavLink to="/Login">Sign in</NavLink>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
