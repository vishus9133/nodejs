Plotly = require("plotly");


var trace1 = {
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
};
var trace2 = {
    x: [1999, 2000, 2001, 2002],
    y: [16, 5, 11, 9],
    type: 'scatter'
};
var data = [trace1, trace2];
var layout = {
    title: 'Sales Growth',
    xaxis: {
	title: 'Year',
	showgrid: false,
	zeroline: false
    },
    yaxis: {
	title: 'Percent',
	showline: false
    }
};
Plotly.Plot( data, layout);


