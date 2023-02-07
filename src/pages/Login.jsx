import styles from "../styles/Login.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const baseurl = "http://localhost:1111/";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    const user = {
      username: username,
      password: password,
    };
    navigate("/");
    axios.post(baseurl + "login", user).then(res => {
      localStorage.setItem("webtoken",res.data)
      alert(localStorage.getItem("webtoken"));
      localStorage.setItem("user",JSON.stringify(user))
    
    }).catch(err => {
      console.log(err)
    })
  };


  return (
    <div className={styles.all}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          style={{
            color: "#02B589",
            textDecoration: "none",
            fontSize: 20,
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
            marginRight: 50,
            margin: 50,
          }}
        >
          WANT SOMETHING ELSE? PRESS ME
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            // margin: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: 50,
            }}
          >
            <img src={logo} style={{ width: 150, height: 100 }}></img>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              fontSize: 25,
              color: "#02B589",
              fontWeight: "bold",
            }}
          >
            Log in
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ margin: 20 }}>
              <div style={{ marginLeft: 20 }}>Username</div>
              <input
                placeholder="  enter your username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                style={{
                  width: 400,
                  height: 30,
                  borderRadius: 20,
                  fontSize: 15,
                }}
                className={styles.input}
              ></input>
            </div>
            <div style={{ margin: 20 }}>
              <div style={{ marginLeft: 20 }}>Password</div>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="   ●●●●●●●●●●"
                style={{
                  width: 400,
                  height: 30,
                  borderRadius: 20,
                  fontSize: 15,
                }}
                className={styles.input}
              ></input>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: 150,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <input type="checkbox" style={{ accentColor: "#02B589" }}></input>
            <div style={{ color: "#02B589" }}>Remember me?</div>
          </div>
          <Link style={{ color: "black" }}>Forgot password</Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button className={styles.btn2} onClick={Login}>
              Log in
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Link style={{ color: "black", fontWeight: "bold" }} to="/signup">
                Are you new? Sign up!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
