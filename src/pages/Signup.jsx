import styles from "../styles/Login.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Signup = () => {
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
            Sign up
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
              <div style={{ marginLeft: 20 }}>Email</div>
              <input
                placeholder="   name@mail.domian"
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
            <div style={{ margin: 20 }}>
              <div style={{ marginLeft: 20 }}>Confirm Password</div>
              <input
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
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button className={styles.btn2}>Sign up</button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Link style={{color: "black", fontWeight: "bold"}} to="/login">Already have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
