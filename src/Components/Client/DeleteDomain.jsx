"use client"
import React from 'react'
import { Button, message, Popconfirm } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DeleteDomain = ({ domain }) => {

    const router = useRouter();

    const confirm = async () => {
        await axios.delete(`/api/domains?domain=${domain}`).then(() => {
            router.refresh();
            router.push("/")
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <Popconfirm
            title="Delete Domain"
            description={`Are you sure to delete ${domain} domain?`}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
        >
            <Button danger>Delete this domain</Button>
        </Popconfirm>
    )
}

export default DeleteDomain