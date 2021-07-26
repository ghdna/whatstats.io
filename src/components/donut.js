import { Radar, Bar } from "react-chartjs-2";

function RadarChart(props) {
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.title,
                data: props.data,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 131, 213, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 131, 213, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scale: {
            ticks: { beginAtZero: true },
        },
    };

    return <Radar data={data} options={options} />;
}

export default RadarChart;
