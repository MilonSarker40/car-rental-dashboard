import React from 'react';
import trakingData from '../assets/dummy-data/trackingData';
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip } from 'recharts';

const TrakingChart = () => {
    return (
        <ResponsiveContainer>
            <LineChart margin={{top:5,right:30,left:20,bottom:5,}}>
                <CartesianGrid strokeDasharray='0' stroke='#b7ffe913' />
                <XAxis dataKey='name'/>
                <YAxis dataKey='mt' fill='#ddd'/>
                <Line type='mpnotone' strokeWidth={2} data={trakingData} dataKey='km' stroke='#e1424e' activeDot={{r:8}} />
                <Tooltip wrapperClassName='tooltrip__style' />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default TrakingChart;
