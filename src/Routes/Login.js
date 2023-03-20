import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        // sign in
        const user = userCredential.user;
        // console.log(user);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.code);
        switch (err.case) {
          case "auth/user-not-found":
            alert("Email is not signed up");
            navigate("/signup");
            break;
          case "auth/wrong/password":
            alert("check - your - password");
            break;
          default:
            console.log(err);
        }
      });
  };
  return (
    <main>
      <section>
        <div>
          <p>Focus App</p>
          <form>
            <div>
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                name="email"
                id="email-address"
                required
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div>
              <button onClick={onLogin}>Login</button>
            </div>
          </form>
          <p className="text-sm text-white text-center">
            No account yet?<NavLink to="/signup">Signup</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
