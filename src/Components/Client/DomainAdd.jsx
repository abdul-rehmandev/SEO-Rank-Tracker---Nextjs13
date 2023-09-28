"use client"
import React, { useState } from 'react'
import { Input, Button, message } from 'antd';
import axios from 'axios';
import { useRouter } from "next/navigation"

const DomainAdd = () => {

    const router = useRouter();

    const [domainTitle, setDomainTitle] = useState("")

    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'createDomain';

    const handleDomain = async () => {
        if (!domainRegex.test(domainTitle) || domainTitle == "") return messageApi.open({
            key,
            type: 'error',
            content: 'Please enter a valid domain name',
        });
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        await axios.post("/api/domains", { domainTitle }).then((res) => {
            messageApi.open({
                key,
                type: 'success',
                content: res.data.result.domainTitle + " " + res.data.message,
                duration: 2,
            });
            const audio = new Audio('/assets/NotificationSound/notification.wav');
            audio.play();
            setDomainTitle("")
            router.refresh();
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            {contextHolder}
            <div className='domainAdd-container'>
                <div className="left"><Input size="large" placeholder="NewDomain.com" value={domainTitle} onChange={(e) => setDomainTitle(e.target.value)} /></div>
                <div className="right"><Button size="large" style={{ width: "100%" }} onClick={handleDomain}>Add Domain</Button></div>
            </div>
        </>

    )
}

export default DomainAdd