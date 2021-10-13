var ctxliablites = document.getElementById('LIABLITES').getContext('2d');
var ctxoperatingProperties = document.getElementById('OPERATINGPROFIT').getContext('2d');
var coomnLabels = {
    
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec",],
    datasets: [
        {
            label: "First Line",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            data: [100, 110, 80, 110, 60, 75, 90, 105, 130, 90, 80],
            borderColor: ['rgba(255, 99, 132, 1)'],
            lineTension: 0.5,
            //fill: fillRed
        },
        {
            label: "Second Line",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            data: [5, 15, 8, 12, 30, 12, 25, 27, 13, 40, 60,],
            borderColor: ['rgba(75, 192, 192, 1)'],
            lineTension: 0.5,
            //fill: fillblue
        }  
    ]
}

// Single data

var coomnLabelsSingle = {
    
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec",],
    datasets: [
       
        {
            label: "Second Line",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            data: [5, 15, 8, 12, 30, 12, 25, 27, 13, 40, 60,],
            borderColor: ['rgba(75, 192, 192, 1)'],
            lineTension: 0.5,
            //fill: fillblue
        }  
    ]
}

var commonOptins = {
    plugins: {
        legend: {
          display: false
        }
    },
    scales: {
        // y: {
        //     beginAtZero: true,
        //     display:false
        // },  
        x: {
            beginAtZero: true,
            display:false
        }
    }
}

//Chart 
var lineliablites = new Chart(ctxliablites, {
    type: 'line',
    data: coomnLabels,
    //options: commonOptins
});

//Chart 
var opertingProfit = new Chart(ctxoperatingProperties, {
    type: 'line',
    data: coomnLabels,
    options: commonOptins
});
