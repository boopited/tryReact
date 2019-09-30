import * as React from "react";

const LoginPage: React.SFC = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    return (
        <div className="page-container">
            <h1>Login</h1>
            <p>You need to login ...</p>
        </div>
    );
};

export default LoginPage;
