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
            navigate('/Profile');
        }
    }, []);

   // if(Auth.loggedIn() ? navigate('/Profile') : ( )
    return (
        <div>
        {Auth.loggedIn() ? ( <Button onClick={Auth.logout}>Logout</Button> ) : (
        // {Auth.loggedIn() ? navigate('/Profile') : (
            <div className="logsign">
                <div className="container" styles={{margin:"10px"}}>
                <h1>Sign Up</h1>
                <Signup />
                </div>
                <div className="container" styles={{margin:"10px"}}>
                <h1>Log In</h1>
                <LoginForm />
                </div>
            </div>
        )}
        </div>

    );
}

export default HomePage;