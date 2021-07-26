import { Bar } from "react-chartjs-2";

function MessagesPerMember(props) {
    
    const height = props.labels.length > 9 ? 45 * props.labels.length : 400;
    const data = {
        labels: props.labels,
        datasets: [
            {
                //label: "# of Messages",
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
        animation: false,
        indexAxis: "y",
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scaleShowValues: true,
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: props.title,
            },
            tooltip: {
                usePointStyle: true,

                /*callbacks: {
                    label: function (context) {
                        let label = context.raw.toLocaleString();

                        label += ` messages (${Math.floor(
                            (context.raw / props.total) * 100
                        )}% of total)`;

                        return label;
                    },
                },*/
            },
        },
    };
    return (
        <div>
            <Bar data={data} height={height} options={options} />
        </div>
    );
}

export default MessagesPerMember;
