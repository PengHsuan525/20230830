d3.csv(dataURL).then(
    getCSV_Data
);

function unpack(rows,key){
    return rows.map(function(row){
        return row[key];
    });
}

function getCSV_Data(rows){
    console.log(rows);
    let trace1={}
    trace1.type ="choropleth";
    trace1.locationmode ="country names";
    trace1.locations =unpack(rows, 'location');
    trace1.z =unpack(rows, 'alcohol');
    // trace1.text =unpack(rows, 'location');
    // trace1.autocolorscale =true;

    let data =[];
    data.push(trace1);
    let layout ={
        title:'Purealcohol consumption<br>among adults (age 15+) in 2010',
        margin: {
            t: 50,
            l: 0,
        },
        geo: {
            projection: {type: 'robinson'}
        }
    };
    Plotly.newPlot(myGraph, data, layout)
}