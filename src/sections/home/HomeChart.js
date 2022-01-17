import React from "react";
import { styled } from '@mui/material/styles';
import {
    LineChart,
    Line,
    LabelList,
    Label,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


const RootStyle = styled('div')(() => ({
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px',
    position: 'relative',
    minHeight: '911px'
    // padding: theme.spacing(5, 0),
    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(8, 0),
    // },
}));

const data = [
    {
        name: "Private Round",
        uv: 32500000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Public Sale",
        uv: 5000000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "DEX TGE",
        uv: 3000000,
        pv: 9800,
        amt: 2290
    },
    // {
    //     name: "Team",
    //     uv: 2780,
    //     pv: 3908,
    //     amt: 2000
    // },
    // {
    //     name: "Page E",
    //     uv: 1890,
    //     pv: 4800,
    //     amt: 2181
    // },
    // {
    //     name: "Page F",
    //     uv: 2390,
    //     pv: 3800,
    //     amt: 2500
    // },
    // {
    //     name: "Page G",
    //     uv: 3490,
    //     pv: 4300,
    //     amt: 2100
    // }
];

export default function HomeChart() {
    return (
        <RootStyle>
            <LineChart
                width={700}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF7C03" />
                        {/* <stop offset="50%" stopColor="#c147c1" /> */}
                        <stop offset="100%" stopColor="#FFD500" />
                    </linearGradient>
                </defs>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" >
      <Label value="Pages of my website" offset={0} position="insideBottom" />
      </XAxis> */}
                {/* <YAxis />
      <Tooltip />
      <Legend />  */}
                {/* <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      /> */}
                <Line type="monotone" dataKey="uv" stroke="url(#colorUv)" strokeWidth={4} >
                    <LabelList dataKey='name' position="insideBottomRight" content="abc" style={{ textAnchor: 'left', fontSize: '80%', paddingBottom: '20px', fill: '#fff' }} />
                    {/* <LabelList dataKey='uv' position="top" /> */}
                </Line>
            </LineChart>
        </RootStyle>
    );
}
