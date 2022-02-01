import React, { useState } from 'react';
import { StyledH1, ErrorMsg } from '../Utils/Styled Components/StyledText';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useHistory } from 'react-router-dom';
import { LoginBtn, StyledInput, StyledMainContainer } from '../Utils/Styled Components/StyledContainer';

export default function Login() {
    const navigate = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


    

    const login = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate.push('/');
        }catch(error){
            console.error(error);
            if(error.message === 'Firebase: Error (auth/user-not-found).'){
                document.getElementById('error').innerHTML = 'User not registered, please sign up';
            }else if(error.message === 'Firebase: Error (auth/wrong-password).'){
                document.getElementById('error').innerHTML = 'Wrong password';
            }else if(error.message === 'Firebase: Error (auth/invalid-email).'){
                document.getElementById('error').innerHTML = 'Invalid email';
            }else{
                document.getElementById('error').innerHTML = error.message;
            }
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <StyledMainContainer>
            {user ? (
                <>
                    <StyledH1>Already logged in as {user?.email}</StyledH1>
                    <button onClick={logout}>Logout</button>
                </>
            ):(
                <>
                    <StyledH1>Login</StyledH1>
                    <StyledInput type="text" placeholder="Email" 
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} /><br/><br/>
                    <StyledInput type="password" placeholder="Password" 
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} /><br/><br/>
                    <LoginBtn onClick={login}>Login</LoginBtn>
                    <ErrorMsg id="error"></ErrorMsg>

                    <p>New to this page? Please <a href="/signup">Sign Up</a></p>
                </>
            )}
            
            
            

        </StyledMainContainer>
    )
}
