import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    // console.log(props)
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
            <ChartBar 
            key={dataPoint.id}
            value={dataPoint.value} 
            maxValue={totalMax} 
            lable={dataPoint.label} />)}
    </div>
}

export default Chart
