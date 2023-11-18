import React from 'react';
import Chart from 'react-apexcharts';

class ColumnChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'VIVO',
                    data: [4.6]
                },
                {
                    name: 'CLARO',
                    data: [4.7]
                },
                {
                    name: 'OI',
                    data: [4.2]
                },
                {
                    name: 'TIM',
                    data: [4.5]
                },
                {
                    name: 'SKY',
                    data: [4.8,]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 450
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%'
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
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                title: {
                    text: "Média da Satisfação Geral",
                    align: "left",
                    style: {
                        fontSize: "18px",
                        fontFamily: "Poppins-SemiBold",
                        color: "#000",
                    },
                },
                subtitle: {
                    text: "Média das notas das avaliações por prestadora",
                    align: "left",
                    style: {
                        fontSize: "16px",
                        fontFamily: "Poppins-Regular",
                        color: "#000",
                    },
                },
                xaxis: {
                    categories: ['Operadoras'],
                },
                yaxis: {
                    min: 0,
                    max: 5
                },
                fill: {
                    opacity: 1
                }
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
                        type="bar"
                        height={450}
                    />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default ColumnChart;