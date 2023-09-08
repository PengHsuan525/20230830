d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv').then(
    res => {
        drawHistogram(res);
    }
);
function drawHistogram(res) {
    console.log(res);
    let myGraph = document.getElementById('myGraph');
    let trace1 = {};
    trace1.type = "histogram";
    let ageArray = [];
    for (let i = 0; i < res.length; i++) {
        ageArray.push(res[i].Age);
    }
    console.log(ageArray);
    trace1.x = ageArray;
    trace1.xbins = {
        size: 10,
        start: 0,
        // end:60
    };
    trace1.opacity = 0.5;
    trace1.marker = {
        color: 'green'
    };
    // trace1.y = set1;

    let data = [];
    data.push(trace1);

    let layout = {
        margin: {
            t: 50
        },
        title: 'Titanic 年齡分布',
        // barmode: 'overlay'
    };

    Plotly.newPlot(myGraph, data, layout);
};
