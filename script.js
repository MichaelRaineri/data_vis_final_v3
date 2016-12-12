$(function () {

    Highcharts.chart('container', {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Topic frequency during cafe owner interviews'
        },

        xAxis: {
            categories: ['Recycle', 'upcycle', 'downcycle', 'trash']
        },

        yAxis: {
            categories: ['Seven Point Espresso', 'Gorilla Coffee', 'Nunu', 'Hungry Ghost', 'cafe 5'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[8]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> was mentioned <br><b>' +
                    this.point.value + '</b> times by <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [[0, 0, 20], [0, 1, 16], [0, 2, 8], [0, 3, 2], [0, 4, 6], [1, 0, 15], [1, 1, 15], [1, 2, 7], [1, 3, 6], [1, 4, 7], [2, 0, 3], [2, 1, 15], [2, 2, 12], [2, 3, 6], [2, 4, 5], [3, 0, 7], [3, 1, 13], [3, 2, 11], [3, 3, 19], [3, 4, 16]],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]

    });
});
