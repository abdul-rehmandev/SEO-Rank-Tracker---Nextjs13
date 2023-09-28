import React from 'react'
import Domain from '../Client/Domain'

const DomainList = async ({ domains }) => {

    return (
        <>
            {domains?.map((domain, index) => (
                <Domain key={index} domain={domain} />
            ))}
        </>
    )
}

export default DomainList