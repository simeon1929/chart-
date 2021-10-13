var ctxVendorOne = document.getElementById('GRAPHVendor').getContext('2d');
var ctxVendortwo = document.getElementById('DueVendor').getContext('2d');
var ctxVendorthree = document.getElementById('VENDORPURCHSE').getContext('2d');
var ctxVendortfour = document.getElementById('VENDORPROPOSAL').getContext('2d');
var ctxVendortfive = document.getElementById('PURCHASEDRAFT').getContext('2d');
var ctxVendortsix = document.getElementById('PENDINGPURCHASE').getContext('2d');
var ctxVendortseven = document.getElementById('CANCELORDERS').getContext('2d');
var ctxVendorteight = document.getElementById('STOCKALERT').getContext('2d');
var coomnLabels = {
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
    }
}

//Chart 
var vendorOne = new Chart(ctxVendorOne, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
//Chart 
var vendortwo = new Chart(ctxVendortwo, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
//Chart 
var vendorthree = new Chart(ctxVendorthree, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
//Chart
var vendorfour = new Chart(ctxVendortfour, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
//cart
var ctxVendortfive = new Chart(ctxVendortfive, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
//Chart
var ctxVendortsix = new Chart(ctxVendortsix, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
//Chart
var ctxVendortseven = new Chart(ctxVendortseven, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
//Chart
var ctxVendorteight = new Chart(ctxVendorteight, {
    type: 'bar',
    data: coomnLabels,
    options: commonOptins
});
