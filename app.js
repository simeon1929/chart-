
var salesMonth = document.getElementById('SALES').getContext('2d');
var purchaseMonth = document.getElementById('PURCHASE').getContext('2d');

var lineChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec",],
    datasets: [
        {
            label: "First Line",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            data: [100, 110, 80, 110, 60, 75, 90, 105, 130, 90, 80],
            borderColor: ['rgba(255, 99, 132, 1)'],
            lineTension: 0.5
        },
        {
            label: "Second Line",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            data: [5, 15, 8, 12, 30, 12, 25, 27, 13, 40, 60,],
            borderColor: ['rgba(75, 192, 192, 1)'],
            lineTension: 0.5
        },
        
        
        
        
    ]
};

// remove bg lines
const bgscaleNone = {
    axisX:{
        lineThickness: 0,
        tickThickness: 0
    },
    axisY:{
        lineThickness: 0,
        gridThickness: 0,
        tickLength: 0
    },
    // yAxes: [ { gridLines: { display: false } } ],
    // x: {
    //     grid:{
    //         stacked: false,
    //         display:false
    //             }
    // },
    // y: {
    //     stacked: false,
    //     grid:{
    //         display:true
    //         }
    // }
}



var salesOne = new Chart(salesMonth, {
    type: 'line',
    data:lineChart,
    options: {
        scales: bgscaleNone
      }

});

// // Chart One

// var barChartLine = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec",],
//     datasets: [
//         {
//             label: "Bar Chart One",
//             backgroundColor: "rgba(255, 99, 132, 0.8)",
//             data: [10, 15, 30, 5, 12, 10, 30, 2, 8, 3, 13, 15],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)' 
//             ],
//         },
//         {
//             label: "Bar Chart Two",
//             backgroundColor: "rgba(75, 192, 192, 0.8)",
//             data: [0, 2, 20, 12, 18, 13, 8, 25, 12, 8, 22, 6],
//             borderColor: [
//                 'rgba(75, 192, 192, 1)' 
//             ],
//         }
//     ]
// };
// var purchaseOne = new Chart(purchaseMonth, {
//     type: 'bar',
//     data: barChartLine
    
// });





