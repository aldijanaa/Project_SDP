document.addEventListener('DOMContentLoaded', function() {

    // Load Google Charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawCharts);

    // Ensure charts reload when switching to dashboard view
    $(document).ready(function () {
        $(document).on('spapp:load', function (e, view) {
            if (view === "dashboard") {
                google.charts.setOnLoadCallback(drawCharts);
            }
        });
    });
    // Function to draw all charts
    // Main function to draw charts
    function drawCharts() {
        if (document.getElementById('budgetPieChart')) {
            drawBudgetChart();
        }
        if (document.getElementById('categoriesPieChart')) {
            drawCategoriesChart();
        }
        if (document.getElementById('curve_chart')) {
            drawPerformanceChart();
        }
    }
        // Event listener for SPApp view changes
    $(document).on('spapp:load', function (e, view) {
        // Check if the current view is the dashboard
        if (view === "dashboard") {
            google.charts.setOnLoadCallback(drawCharts);
        }
    });


    // Budget Chart
    function drawBudgetChart() {
        var data = google.visualization.arrayToDataTable([
            ['Category', 'Amount'],
            ['Expenses', 3600],
            ['Balance', 3420],
            ['Revenues', 180]
        ]);

        var options = {
            title: 'Budget Overview',
            is3D: true,
            colors: ['#e0440e', '#e6693e', '#ec8f6e']
        };

        var chart = new google.visualization.PieChart(document.getElementById('budgetPieChart'));
        chart.draw(data, options);
    }

    // Categories Chart
    function drawCategoriesChart() {
        var data = google.visualization.arrayToDataTable([
            ['Category', 'Amount'],
            ['Home', 0],
            ['Transportation', 0],
            ['Entertainment', 0],
            ['Food', 3600],
            ['Other', 0]
        ]);

        var options = {
            title: 'Spending by Category',
            is3D: true,
            colors: ['#3366cc', '#109618', '#990099', '#dc3912', '#ff9900']
        };

        var chart = new google.visualization.PieChart(document.getElementById('categoriesPieChart'));
        chart.draw(data, options);
    }

    // Performance Line Chart
    function drawPerformanceChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004', 1000, 400],
            ['2005', 1170, 460],
            ['2006', 660, 1120],
            ['2007', 1030, 540]
        ]);

        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }
});