import * as React from 'react';
import {
    LineChart,
    lineElementClasses,
    markElementClasses,
} from '@mui/x-charts/LineChart';
import Item from '../Item';
import SelectAutoWidth from '../SelectChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function DashedLineChart() {
    return <Item>
        <SelectAutoWidth />
        <LineChart
            width={500}
            height={400}
            series={[
                { data: pData, label: 'pv', id: 'pvId' },
                { data: uData, label: 'uv', id: 'uvId' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                padding: 1,
                [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
                    strokeWidth: 1,
                },
                '.MuiLineElement-series-pvId': {
                    strokeDasharray: '5 5',
                },
                '.MuiLineElement-series-uvId': {
                    strokeDasharray: '3 4 5 2',
                },
                [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
                    fill: '#fff',
                },
                [`& .${markElementClasses.highlighted}`]: {
                    stroke: 'none',
                },
            }}
        />
    </Item>
}
