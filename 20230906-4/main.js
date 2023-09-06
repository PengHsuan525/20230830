let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "histogram";
trace1.x = set1;
trace1.opacity = 0.2;
trace1.marker = {
    color: 'green'
}

let trace2 = {};
trace2.type = "histogram";
trace2.x = set2;
trace2.opacity = 0.7;
trace2.marker = {
    color: 'green'
}

let data = [];
data.push(trace1);
data.push(trace2);

let layout = {
    margin: {
        t: 50
    },
    //barmode: 'overlay',
    title: ''
};

Plotly.newPlot(myGraph, data, layout);

