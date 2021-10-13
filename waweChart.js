var ctxtopSles = document.getElementById('TOPSALES').getContext('2d');

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
            backgroundColor: [
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