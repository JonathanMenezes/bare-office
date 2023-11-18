import React from 'react';
import Chart from 'react-apexcharts';

class LineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "VIVO",
                    data: [
                        180, 220, 250, 230, 240, 260, 254, 189, 225,
                        290, 250, 320,
                    ],
                },
                {
                    name: "CLARO",
                    data: [
                        240, 235, 310, 290, 255, 199, 234, 270, 260,
                        275, 300, 335,
                    ],
                },
                {
                    name: "OI",
                    data: [
                        110, 150, 130, 140, 171, 160, 159, 166, 121,
                        150, 180, 210,
                    ],
                },
                {
                    name: "TIM",
                    data: [
                        250, 270, 330, 310, 290, 305, 270, 250, 275,
                        250, 220, 260,
                    ],
                },
                {
                    name: "SKY",
                    data: [
                        200, 255, 265, 270, 270, 280, 285, 285, 290,
                        310, 330, 350,
                    ],
                },
            ],
            options: {
                chart: {
                    height: 450,
                    type: "line",
                    toolbar: {
                        show: false,
                    },
                },
                colors: [
                    "#700C88",
                    "#f00",
                    "#E46C0A",
                    "#00f",
                    "#9e0000",
                ],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: "straight",
                },
                title: {
                    text: "Avaliação Média por Prestadora",
                    align: "left",
                    style: {
                        fontSize: "18px",
                        fontFamily: "Poppins-SemiBold",
                        color: "#000",
                    },
                },
                subtitle: {
                    text: "Número de avaliações recebidas por prestadora em 2022",
                    align: "left",
                    style: {
                        fontSize: "16px",
                        fontFamily: "Poppins-Regular",
                        color: "#000",
                    },
                },
                grid: {
                    borderColor: "#e7e7e7",
                    row: {
                        colors: ["#f3f3f3", "transparent"],
                        opacity: 0.5,
                    },
                },
                markers: {
                    size: 1,
                },
                xaxis: {
                    categories: [
                        "Jan",
                        "Fev",
                        "Mar",
                        "Abr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Ago",
                        "Set",
                        "Out",
                        "Nov",
                        "Dez",
                    ],
                },
                yaxis: {
                    min: 100,
                    max: 360,
                },
                legend: {
                    position: "top",
                    horizontalAlign: "right",
                    floating: true,
                    offsetY: -25,
                    offsetX: -5,
                },
            },
        };
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        height={450}
                    />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default LineChart;

