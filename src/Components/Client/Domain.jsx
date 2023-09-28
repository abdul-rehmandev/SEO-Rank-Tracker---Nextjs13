import React from 'react'
import { Card, Tag, Collapse, Tooltip } from 'antd';
import Link from 'next/link';
import DomainChart from './DomainChart';

const Domain = async ({ domain }) => {

    async function getKeywords() {
        const res = await fetch(`http://127.0.0.1:3000/api/keywords?domain=${domain.domainTitle}`, { cache: "no-cache" });
        const data = await res.json();
        return data;
    }

    const data = await getKeywords();

    return (
        <div className='domain-container'>
            <Card
                title={domain.domainTitle}
                extra={<Link href={`/domains/${domain.domainTitle}`} className='link'><Tooltip title="View Domain"> <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/24/visible--v1.png" alt="visible--v1" /></Tooltip></Link>}
                style={{
                    width: "100%",
                }}
            >
                <div className="tags">
                    {data?.result?.map((keyword, index) => (
                        <Tag key={index}><Link className='link' href={`/domains/${domain.domainTitle}/${encodeURIComponent(keyword.keyword)}`}>{keyword.keyword}</Link></Tag>
                    ))}
                </div>
                <div className="stats mt-3">
                    <Collapse
                        items={[{
                            label: 'Check Domain Stats', children: <DomainChart domainName={domain.domainTitle} />
                        }]}
                    />
                </div>
            </Card>
        </div>
    )
}

export default Domain