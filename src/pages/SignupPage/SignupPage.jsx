import "./SignupPage.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import logo from "../../img/logo.png"

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  // const [bounce, setBounce] = useState(false)
  // const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     setCount(count + 1);
  //     setBounce(!bounce);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // },[count])

  return (
<>
<div className="su-main-container">
<form onSubmit={handleSignupSubmit}>
<div className='bold-line'></div>
<div className='su-container'>
  <div className="su-img-container window">
    <Link to={"/"}><img src={logo} 
    // className={`su-img ${bounce ? "animate__animated animate__rubberBand" : null}`}
    className="su-img animate__animated animate__backInDown"
    /></Link>
  </div>
  <div className='window'>
    <div className='overlay'></div>
    <div className='content animate__animated animate__backInLeft' >
      <div className='welcome'>Sign up</div>
      
      <div className='input-fields'>
        <input type='text' placeholder='Username' className='input-line full-width' name="name" value={name} onChange={handleName}></input>
        <input type='email' placeholder='Email' className='input-line full-width' value={email} onChange={handleEmail} name="email"></input>
        <input type='password' placeholder='Password' className='input-line full-width' name="password"
    value={password}
    onChange={handlePassword}></input>
      </div>
    </div>
    <div className="animate__animated animate__backInUp su-links"><button className='ghost-round mt-5 su-btn' id="ghost-round">Crear Cuenta</button>
    <Link to={"/login"}><p className="text-primary">¿Ya tienes una cuenta?</p></Link>
    {errorMessage && <p classNameName="error-message">{errorMessage}</p>}
    </div> 
  </div>
</div>
</form>
</div>
</>
  );
}

export default SignupPage;


{/* <div>
<h1>Sign Up</h1>

<form onSubmit={handleSignupSubmit}>
  <label>Email:</label>
  <input type="email" name="email" value={email} onChange={handleEmail} />

  <label>Password:</label>
  <input
    type="password"
    name="password"
    value={password}
    onChange={handlePassword}
  />

  <label>Name:</label>
  <input type="text" name="name" value={name} onChange={handleName} />

  <button type="submit">Sign Up</button>
</form>

{errorMessage && <p classNameName="error-message">{errorMessage}</p>}

<p>Already have account?</p>
<Link to={"/login"}> Login</Link>
</div> */}