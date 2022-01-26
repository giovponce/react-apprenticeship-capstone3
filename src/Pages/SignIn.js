import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { StyledH1 } from '../Utils/Styled Components/StyledText';

export default function SignIn() {
    const navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);            
            console.log(user);
            navigate('/');
        }catch(error){
            console.error(error);
        }
    };


  return <div>
        {user ? (
            <>
                <StyledH1>Already logged in as {user?.email}</StyledH1>
            </>
        ):(
            <> 
                <StyledH1>Register</StyledH1>
                <input 
                    type="text" placeholder="newEmail" 
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}/>
                <input type="password" placeholder="newPassword"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} />
                <button onClick={register}>Register</button>

                <p>Already have an account? Please <a href="/login">Log In</a></p>
            </>
        )}
        

        </div>;
}
