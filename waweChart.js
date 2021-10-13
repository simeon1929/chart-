var ctxtopSles = document.getElementById('TOPSALES').getContext('2d');

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
var dataValues = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [8, 19, 17, 3, 11, 18],
            //barPercentage:-50,
            barThickness: 4,// bar thickness
            maxBarThickness: 4, // bar thickness
           // minBarLength: 1,
            borderWidth: 1,
            backgroundColor: [
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
            ],
            borderColor: [
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
                'rgba(221, 101, 250, 1)',
                'rgba(196, 171, 223, 1)',
            ],
        }]
}
var topSles = new Chart(ctxtopSles, {
    type: 'line',
    data: dataValues,
    options: commonOptins
});