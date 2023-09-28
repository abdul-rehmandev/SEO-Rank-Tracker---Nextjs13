"use client"
import React, { useState } from 'react'
import { Input, Button, message } from 'antd';
import axios from 'axios';
import { useRouter } from "next/navigation"

const KeywordAdd = ({ domain }) => {

    const router = useRouter();

    const [keyword, setKeyword] = useState("")

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'createKeyword';

    const handleKeyword = async () => {
        if (keyword == "") return messageApi.open({
            key,
            type: 'error',
            content: 'Keyword field must not be empty',
        });
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        await axios.post("/api/keywords", { keyword, domain: domain }).then((res) => {
            messageApi.open({
                key,
                type: 'success',
                content: res.data.message,
                duration: 2,
            });
            const audio = new Audio('/assets/NotificationSound/notification.wav');
            audio.play();
            setKeyword("")
            router.refresh();
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            {contextHolder}
            <div className='keywordAdd-container'>
                <div className="left"><Input size="large" placeholder="Add new keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} /></div>
                <div className="right"><Button size="large" style={{ width: "100%" }} onClick={handleKeyword}>Add Keyword</Button></div>
            </div>
        </>
    )
}

export default KeywordAdd