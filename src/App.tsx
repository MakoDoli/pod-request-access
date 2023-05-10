import "./App.css";
import "./tablet.css";
import "./desktop.css";
import { useState } from "react";
import logo from "./assets/desktop/logo.svg";
import spotify from "./assets/desktop/spotify.svg";
import apple from "./assets/desktop/apple-podcast.svg";
import google from "./assets/desktop/google-podcasts.svg";
import pocket from "./assets/desktop/pocket-casts.svg";
import dots from "./assets/desktop/bg-pattern-dots.svg";
function App() {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  const checkEmail = () => {
    const validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(validRegex)) setVisible(true);
    else setVisible(false);
  };

  return (
    <div className="App">
      <main className="container">
        <div className="logo-container">
          <img src={logo} alt="logo"></img>
        </div>
        <section className="main-info">
          <div className="text-container">
            <h1>PUBLISH YOUR PODCASTS</h1>
            <h2>EVERYWHERE</h2>
            <p>
              Upload your audio to Pod with a single click. We’ll then
              distribute your podcast to Spotify, Apple Podcasts, Google
              Podcasts, Pocket Casts and more!
            </p>
          </div>
          <div className="podcasts-email">
            <div className="podcasts">
              <img className="spotify" src={spotify} alt="spotify"></img>
              <img className="apple" src={apple} alt="apple"></img>
              <img className="google" src={google} alt="google"></img>
              <img className="pocket" src={pocket} alt="pocket"></img>
            </div>
            <div className="email-button">
              <div className="email">
                <input
                  className="input"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {visible ? <p>Oops! Please check your email!</p> : ""}
              </div>

              <div className="request-button">
                <button onClick={checkEmail} className="button">
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <img className="dots" alt="dots" src={dots}></img>
      </footer>
    </div>
  );
}

export default App;
