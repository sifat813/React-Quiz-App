import { useState } from "react";
import Form from "./Form";
import Textinput from "./Textinput";
import Button from "./Button";
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const LoginForm = () => {

  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState();

   const history = useNavigate();
  
   function handleSubmit(e) {
    e.preventDefault();
       setError("");
       login(email, password);
       history("/");
       }

  return (
    <Form style={{height:'330px'}} onSubmit={handleSubmit}>
      <Textinput
      type='text'
      placeholder='Enter email'
      icon="alternate_email"
      value={email}
      required
      onChange={(e)=>{setEmail(e.target.value)}} />

      <Textinput
      type='password'
      placeholder='Enter password'
      icon="lock"
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}/>

      {error && <p className="error">{error}</p>}<br/>

      <Button onClick={handleSubmit}>
        <span>Submit now</span>
      </Button>

      <div className="info">
        Dont have an account <NavLink to='/signup'>Signup</NavLink> instead.
      </div> 

    </Form>
  );
};

export default LoginForm;