var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.render(<hr />, document.getElementById('root'));



(function () {
    // load your general data
    var chartData = require('../data/chartData.json');

    var width = 700,
        height = 300,
        margins = { left: 100, right: 100, top: 50, bottom: 50 },
        title = "User sample",
        // chart series,
        // field: is what field your data want to be selected
        // name: the name of the field that display in legend
        // color: what color is the line
        chartSeries = [
            {
                field: 'BMI',
                name: 'BMI',
                color: '#ff7f0e'
            }
        ],
        // your x accessor
        x = function (d) {
            return d.index;
        }

    ReactDOM.render(

        <LineChart
            showXGrid={false}
            showYGrid={false}
            margins={margins}
            title={title}
            data={chartData}
            width={width}
            height={height}
            chartSeries={chartSeries}
            x={x}
        />
        , document.getElementById('chart')
    )
})()