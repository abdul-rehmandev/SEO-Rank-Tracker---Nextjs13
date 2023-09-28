import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { Dropdown, Avatar } from 'antd';
import LogoutBtn from '../Client/LogoutBtn';

const Header = async () => {

    const session = await getServerSession(authOptions);

    const user = session?.user;

    const items = [
        {
            key: '1',
            label: (
                <span>Hi! <b>{user?.name}</b></span>
            ),
        },
        {
            key: '2',
            label: (
                <LogoutBtn />
            ),
        },
    ];

    return (
        <div className="container header-container">
            <div className="left">
                <Link href="/" className='link'><h3>Rank Tracker</h3></Link>
            </div>
            <div className="right">
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottom"
                >
                    <Avatar src={user?.image} draggable="false" size={40} style={{ cursor: "pointer" }}></Avatar>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header