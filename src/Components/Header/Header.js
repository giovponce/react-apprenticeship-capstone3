import React from "react";
import MobileNavigation from "./MobileNavigation";


export default function Header({user, getSearchResult}) {


    

    return (
        <div>
            <MobileNavigation user={user} getSearchResult={getSearchResult}/>       
        </div>
    );
}