import React, { useState } from 'react';
import { StyledH1 } from '../Utils/Styled Components/StyledText';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useHistory } from 'react-router-dom';
import { StyledMainContainer } from '../Utils/Styled Components/StyledContainer';

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
                    <input type="text" placeholder="Email" 
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                    <input type="password" placeholder="Password" 
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                    <button onClick={login}>Login</button>

                    <p>New to this page? Please <a href="/signin">Sign In</a></p>
                </>
            )}
            
            
            

        </StyledMainContainer>
    )
}
