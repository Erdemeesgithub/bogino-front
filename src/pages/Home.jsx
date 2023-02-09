import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SpinnerW from "./Spinner";
import { useEffect } from "react";

const baseUrl = "http://localhost:1111/";

export const Home = () => {
  const [values, setValues] = useState("");
  const [data, setData] = useState("");
  const token = localStorage.getItem("webtoken");

  useEffect(() => {
    axios
      .get(baseUrl + "urls")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  // function createUrl() {
  //   console.log(values.longUrl);
  //   axios
  //     .post(baseUrl + "urls", {
  //       longUrl: values.longUrl,
  //       // username: ,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }

  const Url = ({ element }) => {
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          {element.longUrl}
          <h5>original Url</h5>
        </div>
        <div style={{ marginTop: "20px" }}>
          {element.shortUrl}
          <h5>shortened Url</h5>
        </div>
      </>
    );
  };

  if (!token) {
    return <SpinnerW />;
  }

  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ margin: 50 }}>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              style={{
                color: "#02B589",
                textDecoration: "none",
                fontSize: 20,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bold",
                marginRight: 50,
              }}
            >
              WANT SOMETHING ELSE? PRESS ME
            </a>
            <Link className={styles.btn1} to="/login">
              Login
            </Link>
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
            style={{ display: "flex", flexDirection: "column", marginTop: 150 }}
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
            <div>
              <input
                placeholder="    ENTER THE LINK HERE"
                style={{
                  width: 400,
                  height: 30,
                  borderRadius: 20,
                  marginRight: 30,
                  fontSize: 18,
                }}
                className={styles.input}
              ></input>
              <button className={styles.btn2}>SHORTEN URL</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {data &&
          data.map((url) => {
            return <Url element={url} />;
          })}
      </div>
    </div>
  );
};
