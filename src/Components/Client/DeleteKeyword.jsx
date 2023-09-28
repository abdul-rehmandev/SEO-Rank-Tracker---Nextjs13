"use client"
import React from 'react'
import { Button, message, Popconfirm } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DeleteKeyword = ({ keyword, domain }) => {

    const router = useRouter();

    const confirm = async () => {
        await axios.delete(`/api/keywords?domain=${domain}&keyword=${decodeURIComponent(keyword)}`).then(() => {
            router.refresh();
            router.push(`/domains/${domain}`)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <Popconfirm
            title="Delete Keyword"
            description={`Are you sure to delete ${decodeURIComponent(keyword)} keyword?`}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
        >
            <Button danger>Delete this keyword</Button>
        </Popconfirm>
    )
}

export default DeleteKeyword