"use client"
import React from 'react'
import { Button } from 'antd';
import { signIn } from "next-auth/react"

const Login = () => {
    return (
        <div className='login-container-box'>
            <h2>Login to your account</h2>
            <Button size="large" onClick={() => signIn("google")}><img width="20" height="20" src="https://img.icons8.com/color/20/google-logo.png" alt="google-logo" style={{ marginRight: "5px" }} /> Login with google</Button>
        </div>
    )
}

export default Login