d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv').then(
    res => {
        drawPieChart(res);
    }
);

function drawPieChart(res){
    console.log(res);
    let trace1 = {};
    trace1.type = "pie";
    trace1.title = "男女比例";
    trace1.labels = ["男生","女生"];
    trace1.values = [0,0];
    trace1.domain = {
        row: 0,
        column: 0
    };
    trace1.hole = 0.5;

    for (let x = 0; x < res.length; x++) {
        if(res[x]['Sex']=='male'){
            trace1.values[0]+=1;
        } else if (res[x]['Sex'] == 'female'){
            trace1.values[1]+=1;
        }
    }

    let trace2 = {};
    trace2.type = "pie";
    trace2.title = "登船港口";
    trace2.labels = ['S','C','Q'];
    trace2.values = [0,0,0];

    trace2.domain = {
        row: 0,
        column: 1
    };
    trace2.hole = 0.5;

    for (let x = 0; x < res.length; x++) {
        if (res[x]['Embarked'] == 'S') {
            trace2.values[0] += 1;
        } else if (res[x]['Embarked'] == 'C') {
            trace2.values[1] += 1;
        } else if (res[x]['Embarked'] == 'Q') {
            trace2.values[2] += 1;
        }
    }

    let trace3 = {};
    trace3.type = "pie";
    trace3.title = "生存比例";
    trace3.labels = ["存活","掛了"];
    trace3.values = [0, 0];
    trace3.domain = {
        row: 1,
        column: 0
    };
    trace3.hole = 0.5;

    for (let x = 0; x < res.length; x++) {
        if (res[x]['Survived'] == 1) {
            trace3.values[0] += 1;
        } else if (res[x]['Survived'] == 0) {
            trace3.values[1] += 1;
        }
    }

    let data = [];
    data.push(trace1);
    data.push(trace2);
    data.push(trace3);
    // data.push(trace4);

    let layout = {
        margin: {
            t: 50,
            l: 0
        },
        grid: {
            rows: 2,
            columns: 2
        },
        title:"Titanic 數據比例圖"
    };

    Plotly.newPlot(myGraph, data, layout);
}