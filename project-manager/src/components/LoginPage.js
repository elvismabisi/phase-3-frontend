import React from 'react'
import { Link } from 'react-router-dom'


export default function SignInPage() {
    return (
        <div className="text-center login-body m-5 auto">
        <div className="login-form">
            <h2 className="title-sign">Sign in </h2>
            <form className="form" action="/home">
                <p className="paragraph">
                    <label className="labels">Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p className="paragraph">
                    <label ClassName="labels">Enter Password</label>
                    <Link to="/forget-password"><label className="right-label"></label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p className="paragraph">
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer >
                <p className="paragraph">Register if its your first time here <Link to="/register">Register</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )
}