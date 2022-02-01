import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useHistory } from 'react-router-dom';
import { StyledH1, ErrorMsg } from '../Utils/Styled Components/StyledText';
import { StyledInput, StyledMainContainer, LoginBtn } from '../Utils/Styled Components/StyledContainer';


export default function SignUp() {
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
            if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                document.getElementById('error').innerHTML = 'Password should be at least 6 characters';
            }else if(error.message === 'Firebase: Error (auth/invalid-email).'){
                document.getElementById('error').innerHTML = 'Invalid email';
            }else if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                document.getElementById('error').innerHTML = 'Email already in use';
            }else{
                document.getElementById('error').innerHTML = error.message;
            }
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
                <StyledInput 
                    type="text" placeholder="Email" 
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}/><br/><br/>
                <StyledInput type="password" placeholder="Password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} /><br/><br/>
                <LoginBtn onClick={register}>Register</LoginBtn>
                <ErrorMsg id="error"></ErrorMsg>

                <p>Already have an account? Please <a href="/login">Log In</a></p>
            </>
        )}
        

        </StyledMainContainer>;
}
