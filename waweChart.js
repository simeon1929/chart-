var ctxtopSles = document.getElementById('TOPSALES').getContext('2d');
var ctxtopPurchase = document.getElementById('TOPPURCHASE').getContext('2d');
var ctxtopIncome = document.getElementById('TOPINCOME').getContext('2d');
var ctxtopExpense = document.getElementById('TOPEXPENSE').getContext('2d');

// Gradient
let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, Utils.CHART_COLORS.blue);
    gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
    gradient.addColorStop(1, Utils.CHART_COLORS.red);
  }

  return gradient;
}

var commonOptins = {
    plugins: {
        legend: {
          display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            display:false
        },  
        x: {
            beginAtZero: true,
            display:false
        }
    },
    elements: {
        line: {
            tension: .4
        },
        point:{
            radius: 0
        }
    }
}

// tension Curve 



var dataValues = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f' ,'g', 'h','i' ],
        datasets: [{
            label: '# of Votes',
            data: [3,5,12,2,8,12,3,12,6],
            // //barPercentage:-50,
            // barThickness: 4,// bar thickness
            // maxBarThickness: 4, // bar thickness
           // minBarLength: 1,
            borderWidth: 2,
            borderColor: [
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(196, 171, 223, 1)',
            ],
        }]
}

var topSles = new Chart(ctxtopSles, {
    type: 'line',
    data: dataValues,
    options: commonOptins
});
var topPurchase = new Chart(ctxtopPurchase, {
    type: 'line',
    data: dataValues,
    options: commonOptins
});
var topIncome = new Chart(ctxtopIncome, {
    type: 'line',
    data: dataValues,
    options: commonOptins
});
var topExpense = new Chart(ctxtopExpense, {
    type: 'line',
    data: dataValues,
    options: commonOptins
});