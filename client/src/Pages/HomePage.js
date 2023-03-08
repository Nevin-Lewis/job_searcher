import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUpForm";
import React from "react";

function HomePage() {
    return (
        <div>
            <h1>Homepage</h1>

            <Signup />

            <h1> Split</h1>
            <LoginForm />

        </div>

    );
}

export default HomePage;