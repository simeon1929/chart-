
var salesMonth = document.getElementById('SALES').getContext('2d');
const fillRed = {
    target: 'origin',
    //above: 'rgb(255, 0, 0, 0.2)',   // Area will be red above the origin
    below: 'red'    // And blue below the origin
}
const fillblue = {
    target: 'origin',
    //above: 'blue',   // Area will be red above the origin
    below: 'blue'    // And blue below the origin
}
const animations = {
    tension: {
        duration: 2000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
    }
}
var lineChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec",],
    datasets: [
        {
            //label: "First Line",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            data: [100, 110, 80, 110, 60, 75, 90, 105, 130, 90, 80],
            borderColor: ['rgba(255, 99, 132, 1)'],
            lineTension: 0.5,
            fill: fillRed
        },
        {
            //label: "Second Line",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            data: [5, 15, 8, 12, 30, 12, 25, 27, 13, 40, 60,],
            borderColor: ['rgba(75, 192, 192, 1)'],
            lineTension: 0.5,
            fill: fillblue
        }  
    ]
};

// remove bg lines
const bgscaleNone = {
    x: {
        grid:{
            stacked: false,
            display:false
                },
                gridLines: {
                    drawBorder: 'red'
                }
    },
    y: {
        grid:{
            scaleLineColor: 'transparent',
            display:false,
            stacked: false
            },
            gridLines: {
                drawBorder: 'blue'
        }
    }
}

var salesOne = new Chart(salesMonth, {
    type: 'line',
    data:lineChart,
    options: {
        scales: bgscaleNone,
        animations : animations,
        
      }

});






