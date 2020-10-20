import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"

const Login = () => {

    const signIn = () => {};

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png"
                    alt
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>    
            </div>
        </div>
    )
}

export default Login
