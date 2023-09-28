import DeleteDomain from '@/Components/Client/DeleteDomain';
import KeywordAdd from '@/Components/Client/KeywordAdd'
import KeywordList from '@/Components/Server/KeywordList'
import Link from 'next/link';
import React from 'react'


const page = async ({ params }) => {

    async function getKeywords() {
        const res = await fetch(`http://127.0.0.1:3000/api/keywords?domain=${params.domain}`, { cache: "no-cache" });
        const data = await res.json();
        return data;
    }

    const data = await getKeywords();

    return (
        <>
            <div className="container">
                <Link href="/" className='link d-flex align-items-center'>
                    <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/back.png" alt="back" />
                    <h4 className='mt-2' style={{ color: "gray" }}>DOMAINS</h4>
                </Link>
                <h1 className='mb-3'><b>{params.domain}</b> <DeleteDomain domain={params.domain} /></h1>
                <KeywordAdd domain={params.domain} />
                <h4 className='mt-4' style={{ color: "gray" }}>Keywords</h4>
                <KeywordList keywords={data?.result} domain={params.domain} />
            </div>
        </>
    )
}

export default page