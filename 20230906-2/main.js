let myGraph = document.getElementById('myGraph');


let trace1 = {};
trace1.type = "bar";
trace1.name = 'Age:0-14';
trace1.x = [];
trace1.y = [];
for (let i = 0; i < PeopleNum0_14.length; i++) {
    trace1.x[i] = PeopleNum0_14[i]['year'];
    trace1.y[i] = PeopleNum0_14[i]['count'];
}
trace1.text = trace1.y;
trace1.textfont = {
    size: 15,
    color: 'pink'
}
trace1.marker = {
    color: 'blue'
}

let trace2 = {};
trace2.type = "bar";
trace2.name = 'Age:15-64';
trace2.x = [];
trace2.y = [];
for (let i = 0; i < PeopleNum15_64.length; i++) {
    trace2.x[i] = PeopleNum15_64[i]['year'];
    trace2.y[i] = PeopleNum15_64[i]['count'];
}
trace2.text = trace2.y;
trace2.textfont = {
    size: 15,
    color: 'pink'
}
trace2.marker = {
    color: 'black'
}

let trace3 = {};
trace3.type = "bar";
trace3.name = 'Age:65-';
trace3.x = [];
trace3.y = [];
for (let i = 0; i < PeopleNum65_.length; i++) {
    trace3.x[i] = PeopleNum65_[i]['year'];
    trace3.y[i] = PeopleNum65_[i]['count'];
}
trace3.text = trace3.y;
trace3.textfont = {
    size: 15,
    color: 'pink'
}
trace3.marker = {
    color: 'green'
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {

    margin: {
        t: 50
    },
    barmode: 'stack',
    title: '近10年三階段人口數',
};


Plotly.newPlot(myGraph, data, layout);