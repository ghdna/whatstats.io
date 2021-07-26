import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        //minHeight: 400,
    },
}));

function Trend(props) {
    const classes = useStyles();

    let lineHeight = "150vh";
    if (props.width < 600) {
        lineHeight = "300vh";
    }
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: "Messages",
                data: props.data,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Messages Per Month",
            },
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <div className={classes.root}>
            <Line data={data} height={lineHeight} options={options} />
        </div>
    );
}

export default Trend;
