"use client"
import React from 'react'
import { Chart } from "react-google-charts";

const DomainChart = ({ domainName }) => {

    const data = [
        ["Year", "Rank"],
        ["2019", 1000],
        ["2020", 1170],
        ["2021", 660],
        ["2022", 1030],
    ];

    const options = {
        title: `${domainName}`,
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "50%", height: "70%" },
    };

    return (
        <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    )
}

export default DomainChart