import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action=" ">
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"></input>
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have Account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;