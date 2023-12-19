/* eslint-disable */

import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import logo from "../../img/logo.png"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/profile");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
    <div className="su-main-container">
    <form onSubmit={handleLoginSubmit} className="auth-containers">
    <div className='bold-line'></div>
    <div className='su-container'>
      <div className="su-img-container window">
        <Link to={"/"}>
        <img src={logo} 
        // className={`su-img ${bounce ? "animate__animated animate__rubberBand" : null}`}
        className="su-img animate__animated animate__zoomIn"
        /></Link>
      </div>
      <div className='window'>
        <div className='overlay'></div>
        <div className='content animate__animated animate__backInLeft' >
          <div className='welcome'>Log In</div>
          
          <div className='input-fields'>
            <input type='email' placeholder='Email' className='input-line full-width' name="email" value={email} onChange={handleEmail}></input>
            <input type='password' placeholder='Password' className='input-line full-width' name="password"
    value={password}
    onChange={handlePassword}></input>
          </div>
        </div>
        <div className="animate__animated animate__backInUp su-links"><button className='ghost-round mt-5 su-btn' id="ghost-round">Acceder</button>
        <Link to={"/signup"}><p className="text-primary">¿No tienes una cuenta aún?</p></Link></div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
    </form>
    </div>
    </>
  );
}

export default LoginPage;

{/* <div className="LoginPage">
<h1>Login</h1>

<form onSubmit={handleLoginSubmit}>
  <label>Email:</label>
  <input type="email" name="email" value={email} onChange={handleEmail} />

  <label>Password:</label>
  <input
    type="password"
    name="password"
    value={password}
    onChange={handlePassword}
  />

  <button type="submit">Login</button>
</form>
{errorMessage && <p className="error-message">{errorMessage}</p>}

<p>Don't have an account yet?</p>
<Link to={"/signup"}> Sign Up</Link>
</div> */}
