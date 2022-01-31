import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useHistory } from 'react-router-dom';
import { StyledH1 } from '../Utils/Styled Components/StyledText';
import { StyledMainContainer } from '../Utils/Styled Components/StyledContainer';


export default function SignIn() {
    const navigate = useHistory();

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try{
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);            
            navigate.push('/');
        }catch(error){
            console.error(error);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };


  return <StyledMainContainer>
        {user ? (
            <>
                <StyledH1>Already logged in as {user?.email}</StyledH1>
                <button onClick={logout}>Logout</button>
            </>
        ):(
            <> 
                <StyledH1>Register</StyledH1>
                <input 
                    type="text" placeholder="Email" 
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}/>
                <input type="password" placeholder="Password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} />
                <button onClick={register}>Register</button>

                <p>Already have an account? Please <a href="/login">Log In</a></p>
            </>
        )}
        

        </StyledMainContainer>;
}
