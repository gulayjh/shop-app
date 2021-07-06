import React, { useState } from "react";
import Login from "../src/Login/Login";
import Account from "../src/Account/Account"

export default function login() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div>
            {loggedIn ?
                <Account />
                : <Login
                    setLoggedIn={setLoggedIn}
                />
            }
        </div>
    )
}