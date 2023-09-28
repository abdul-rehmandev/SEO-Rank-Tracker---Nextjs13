"use client"
import React from 'react'
import { Button } from 'antd';
import { signOut } from 'next-auth/react';

const LogoutBtn = () => {
    return (
        <Button style={{ width: "100%" }} onClick={() => signOut()}>Logout</Button>
    )
}

export default LogoutBtn