import { IoMail } from "react-icons/io5";
import Script from "next/script";
import { FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "./authentication.css";

const Authentication = () => {
  return (
    <>
      <div className="wrapper">
        <span className="icon-close">
          <IoClose />
        </span>

        <div className="form-box login font-bold">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box flex items-center">
              <span className="icon">
                <IoMail />
              </span>
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="input-box flex items-center">
              <span className="icon">
                <FaLock />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>

            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Do not have an account?{" "}
                <a href="#" className="register-link">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register font-bold">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box flex items-center">
              <span className="icon">
                <FaUser />
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box flex items-center">
              <span className="icon">
                <IoMail />
              </span>
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="input-box flex items-center">
              <span className="icon">
                <FaLock />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>

            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?{" "}
                <a href="#" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Script src="/script.js" strategy="lazyOnload" /> {/* 修正 */}
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        type="module"
      />
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        noModule
      />
    </>
  );
};

export default Authentication;
