import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUpForm";
import React from "react";
import Auth from "../utils/auth";
import { Button } from "react-bootstrap";

function HomePage() {
    return (
        <div>
            <h1>Homepage</h1>
        {Auth.loggedIn() ? ( <Button onClick={Auth.logout}>Logout</Button> ) : (
            <div>
            <Signup />

            <h1> Split</h1>
            <LoginForm />
            </div>
        )}
        </div>

    );
}

export default HomePage;