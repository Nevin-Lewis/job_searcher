import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUpForm";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";
import { Button } from "react-bootstrap";

function HomePage() {

    const navigate = useNavigate();

    useEffect(() => {
        if(Auth.loggedIn()) {
            console.log("User Authorized");
            navigate('/JobTrack');
        }
    }, []);

   // if(Auth.loggedIn() ? navigate('/Profile') : ( )
    return (
        <div>
        {Auth.loggedIn() ? ( <Button onClick={Auth.logout}>Logout</Button> ) : (
        // {Auth.loggedIn() ? navigate('/Profile') : (
            <div>
                <h1>Sign Up</h1>
                <Signup />

                <h1>Log In</h1>
                <LoginForm />
            </div>
        )}
        </div>

    );
}

export default HomePage;