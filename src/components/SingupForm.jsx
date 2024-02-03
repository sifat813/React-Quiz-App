import Textinput from "./Textinput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import {NavLink, useNavigate} from 'react-router-dom';
import Form from "./Form";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const SingupForm = () => {
     const {signup} = useAuth();

     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [agree, setAgree] = useState();
     const [error, setError] = useState('');

     const history = useNavigate();

      function handleSubmit(e){
          e.preventDefault();
          //validation password
          if(password !== confirmPassword){
               return setError("Password don't match!");
          }else if(password === confirmPassword){
               signup(email, password, username)
               history('/');
          }
     }
     return (
          <Form style={{height: '530px'}} onSubmit={handleSubmit} >
               <Textinput type='text' placeholder='Enter name' icon='person' value={username} onChange={(e) => setUsername(e.target.value)} />

               <Textinput type='text' placeholder='Enter email' icon='alternate_email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
               <Textinput type='password' placeholder='Enter password' icon='lock' value={password} onChange={(e) => {setPassword(e.target.value)}}/>

               <Textinput type='password' placeholder='Confirm password' icon='lock_clock' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>

               <Checkbox text=' I agree to the Terms & Conditions' value={agree} onChange={(e) => setAgree(e.target.value)} />

               {error && <p className="error">{error}</p>}<br/>

               <Button type='submit'>
                   <span>Submit now</span>  
               </Button>
               <div className="info">
                    Already have an account? <NavLink to="/login">Login</NavLink> instead.
               </div>
          </Form>
     );

};

export default SingupForm;

//react 37; 19:20