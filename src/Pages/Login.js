import React from 'react';
import { StyledH1 } from '../Utils/Styled Components/StyledText';

export default function Login() {
  return (
    <div>
            <StyledH1>Register</StyledH1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <br/><br/>

            <StyledH1>Login</StyledH1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <br/><br/>
        

            <p>logged user: </p>
            <button>Logout</button>
    </div>
  )
}
