import "./signIn.css"

export default function SignIn(){
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Financial Tracker</h3>
                    <span className="loginDesc">Envelope budgeting for the modern world.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="User name" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <input placeholder="Password again" className="loginInput"/>
                        <button className="loginButton">Sign In</button>
                        <button className="registerButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}