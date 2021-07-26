import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 20,
    },
}));

function Title(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography
                component="h6"
                variant="h5"
                align="left"
                color="textPrimary"
                gutterBottom>
                {props.title}
            </Typography>
            {props.caption && (
                <Typography
                    component="span"
                    variant="caption"
                    align="left"
                    color="textPrimary"
                    gutterBottom>
                    {props.caption}
                </Typography>
            )}
        </div>
    );
}

export default Title;
