import React from 'react'
import { Card, Collapse, Tooltip } from 'antd';
import Link from 'next/link';

const Keyword = ({ keyword, domain }) => {
    return (
        <div className='mb-4'>
            <Card
                title={keyword.keyword}
                extra={<><Link href={`/domains/${domain}/${encodeURIComponent(keyword.keyword)}`} className='link mx-2'><Tooltip title="View Keyword"> <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/24/visible--v1.png" alt="visible--v1" /></Tooltip></Link></>}
                style={{
                    width: "100%",
                }}
            >
                <div className="stats mt-3">
                    <Collapse
                        items={[{ label: 'Check Keyword Stats', children: <p>Stats</p> }]}
                    />
                </div>
            </Card>
        </div>
    )
}

export default Keyword