import React, { useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase-config';

export default function Header() {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <div>
            <Navigation user={user}/>
            <MobileNavigation user={user}/>       
        </div>
    );
}