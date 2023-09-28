import DeleteKeyword from '@/Components/Client/DeleteKeyword'
import Link from 'next/link'
import React from 'react'

const page = ({ params }) => {
    return (
        <div className="container">
            <Link href={`/domains/${params.domain}`} className='link'>
                <h4 className='mt-4' style={{ color: "gray" }}><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/back.png" alt="back" /> {params.domain}</h4></Link>
            <h1 className='mb-3'><b>{decodeURIComponent(params.keyword)} </b><DeleteKeyword keyword={params.keyword} domain={params.domain} /></h1>
        </div>
    )
}

export default page