import React,{useEffect, useState} from "react";
import * as Components from './SignORLogStyle';
import { useSignup } from "../hooks/useSignup";
import { useSignin } from "../hooks/useLogin";
import Alert from 'react-bootstrap/Alert';
import NavBar from "./NavBar";

function SignORLog() {
  const [signIn, toggle] = useState(true);
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [username, setUsername]=useState("")


  const {signup, isLoading, error}=useSignup()
  const {signin, isLoadingL, errorL}=useSignin()

//   useEffect(()=>{
//     setEmail("")
//     setPassword("")
//     setUsername("")
//   },[])

  const signUpHandler=(e)=>{
    e.preventDefault()
    signup(username, email, password)

  }

  const signInHandler=(e)=>{
    e.preventDefault()
    signin(email, password)

  }
  
  return(
    <>
    <NavBar/>
   <Components.Container>
       <Components.SignUpContainer signinIn={signIn}>
           <Components.Form onSubmit={signUpHandler}>
               <Components.Title>Create Account</Components.Title>
               <Components.Input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Username' />
               <Components.Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email' />
               <Components.Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password' />
               <Components.Button disabled={isLoading}>Sign Up</Components.Button>
               {error &&  
              <Alert variant={'danger'}>
                  {error}
              </Alert>}
           </Components.Form>
       </Components.SignUpContainer>
       <Components.SignInContainer signinIn={signIn}>
            <Components.Form onSubmit={signInHandler}>
                <Components.Title>Sign in</Components.Title>
                <Components.Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                <Components.Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' />
                <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                <Components.Button disabled={isLoadingL}>Sigin In</Components.Button>
                {errorL &&  
                <Alert variant={'danger'}>
                    {errorL}
                </Alert>}
            </Components.Form>
       </Components.SignInContainer>
       <Components.OverlayContainer signinIn={signIn}>
           <Components.Overlay signinIn={signIn}>
           <Components.LeftOverlayPanel signinIn={signIn}>
               <Components.Title>Welcome Back!</Components.Title>
               <Components.Paragraph>
                   To keep connected with us please login with your personal info
               </Components.Paragraph>
               <Components.GhostButton onClick={() => toggle(true)}>
                   Sign In
               </Components.GhostButton>
               </Components.LeftOverlayPanel>
               <Components.RightOverlayPanel signinIn={signIn}>
                 <Components.Title>Hello, Friend!</Components.Title>
                 <Components.Paragraph>
                     Enter Your personal details and start journey with us
                 </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(false)}>
                         Sigin Up
                     </Components.GhostButton> 
               </Components.RightOverlayPanel>
           </Components.Overlay>
       </Components.OverlayContainer>
   </Components.Container>
   </>
  )
}

export default SignORLog;