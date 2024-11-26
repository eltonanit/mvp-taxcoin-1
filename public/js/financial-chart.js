// Data points for the chart
const chartData = [
    { date: '27 ott', value: 62104.94 },
    { date: '28 ott', value: 64200.00 },
    { date: '29 ott', value: 65100.00 },
    { date: '30 ott', value: 64800.00 },
    { date: '31 ott', value: 63900.00 },
    { date: '1 nov', value: 63200.00 },
    { date: '2 nov', value: 61800.00 },
    { date: '3 nov', value: 60500.00 },
    { date: '4 nov', value: 59800.00 },
    { date: '5 nov', value: 59200.00 },
    { date: '6 nov', value: 58900.00 },
    { date: '7 nov', value: 59100.00 },
    { date: '8 nov', value: 67500.00 },
    { date: '9 nov', value: 69800.00 },
    { date: '10 nov', value: 71200.00 },
    { date: '11 nov', value: 73500.00 },
    { date: '12 nov', value: 75800.00 },
    { date: '13 nov', value: 77200.00 },
    { date: '14 nov', value: 76800.00 },
    { date: '15 nov', value: 78500.00 },
    { date: '16 nov', value: 79800.00 },
    { date: '17 nov', value: 81500.00 },
    { date: '18 nov', value: 83200.00 },
    { date: '19 nov', value: 85500.00 },
    { date: '20 nov', value: 88200.00 },
    { date: '21 nov', value: 91894.27 },
    { date: '22 nov', value: 90200.00 },
    { date: '23 nov', value: 89100.00 },
    { date: '24 nov', value: 88000.00 },
    { date: '25 nov', value: 87200.00 },
];

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('financialChart');
    if (!ctx) return;

    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(255, 107, 61, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 107, 61, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.map(data => data.date),
            datasets: [{
                label: 'Valore',
                data: chartData.map(data => data.value),
                borderColor: '#ff6b3d',
                borderWidth: 2,
                backgroundColor: gradient,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: '#ff6b3d'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 20
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            return value.toLocaleString('it-IT', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }) + ' €';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxRotation: 0,
                        font: {
                            size: 11
                        },
                        callback: function(value, index) {
                            const keyDates = ['27 ott', '2 nov', '8 nov', '13 nov', '19 nov', '25 nov'];
                            const label = this.getLabelForValue(value);
                            return keyDates.includes(label) ? label : '';
                        }
                    }
                },
                y: {
                    display: false,
                    beginAtZero: false,
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
});
