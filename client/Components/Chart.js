import React from 'react'
import { connect } from 'react-redux'
import { PieChart, Pie, Tooltip } from 'recharts'
import lodash from 'lodash'

const data = [{ name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
{ name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
{ name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 }];

const Chart = ({ poolInfo }) => (
    <PieChart width={800} height={400}>
        <Pie data={poolInfo} innerRadius={90} fill="#82ca9d" />
        <Tooltip />
    </PieChart>
)

const mapStateToProps = ({ blocks }) => {
    var poolInfoObj = lodash.countBy(blocks.blocks, 'poolInfo.poolName')
    var poolInfo = Object.keys(poolInfoObj).map(function (key) {
        return { name: key, value: poolInfoObj[key] };
    })
    
    return {
        poolInfo
    }
}

export default connect(mapStateToProps)(Chart)