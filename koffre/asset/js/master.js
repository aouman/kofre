// menu retractif

function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('collapsed');
        }
        
// Graphique financier home
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('financeChart').getContext('2d');
            const financeChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
                    datasets: [{
                        label: 'Chiffre d\'affaires',
                        data: [18500, 20100, 22500, 23800, 24500, 25800, 26500, 24500, 28500, 29500, 31200, 32584],
                        backgroundColor: 'rgba(78, 115, 223, 0.05)',
                        borderColor: 'rgba(78, 115, 223, 1)',
                        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
                        borderWidth: 2,
                        tension: 0.3
                    }, {
                        label: 'Dépenses',
                        data: [10200, 9800, 11500, 10800, 11200, 12400, 11800, 10200, 13500, 12800, 14200, 14500],
                        backgroundColor: 'rgba(231, 74, 59, 0.05)',
                        borderColor: 'rgba(231, 74, 59, 1)',
                        pointBackgroundColor: 'rgba(231, 74, 59, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(231, 74, 59, 1)',
                        borderWidth: 2,
                        tension: 0.3
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value + ' €';
                                }
                            }
                        }
                    }
                }
            });
        });


//comptabilié