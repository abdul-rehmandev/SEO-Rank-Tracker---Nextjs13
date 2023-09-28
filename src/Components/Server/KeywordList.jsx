import React from 'react'
import Keyword from '../Client/Keyword'
import { Button, Result } from 'antd';

const KeywordList = ({ keywords, domain }) => {
    return (
        <>
            {keywords.length > 0 ? keywords?.map((keyword, index) => (
                <Keyword key={index} keyword={keyword} domain={domain} />
            )) : <Result
                icon={<img width="48" height="48" src="https://img.icons8.com/color/48/sad--v1.png" alt="sad--v1" />}
                title="Keywords not found! Add some keywords"
            />}
        </>
    )
}

export default KeywordList