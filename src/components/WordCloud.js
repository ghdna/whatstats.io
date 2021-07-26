import ReactWordcloud from "react-wordcloud";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
}));

const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [15, 100],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 0,
};

function WordCloud(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ height: 600 }}>
                <ReactWordcloud options={options} words={props.data} />
            </div>
        </div>
    );
}

export default WordCloud;
