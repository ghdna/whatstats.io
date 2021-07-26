import {
    Typography,
    Grid,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        align: "center",
    },
    bold: {
        fontWeight: "bold",
    },
}));

function HoursMonths(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography
                                className={classes.bold}
                                variant="body1"
                                align="center"
                                gutterBottom>
                                Most Active Months
                            </Typography>
                            <List dense={true}>
                                {Object.keys(props.mostMonths).map((key) => (
                                    <ListItem key={key}>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    className={classes.bold}>
                                                    {key}
                                                </Typography>
                                            }
                                        />
                                        <ListItemText
                                            primary={
                                                <Typography>
                                                    {props.mostMonths[
                                                        key
                                                    ].toLocaleString()}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography
                                className={classes.bold}
                                variant="body1"
                                align="center"
                                gutterBottom>
                                Least Active Months
                            </Typography>
                            <List dense={true}>
                                {Object.keys(props.leastMonths).map((key) => (
                                    <ListItem key={key}>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    className={classes.bold}>
                                                    {key}
                                                </Typography>
                                            }
                                        />
                                        <ListItemText
                                            primary={
                                                <Typography>
                                                    {props.leastMonths[
                                                        key
                                                    ].toLocaleString()}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography
                                className={classes.bold}
                                variant="body1"
                                align="center"
                                gutterBottom>
                                Most Active Hours
                            </Typography>
                            <List dense={true}>
                                {Object.keys(props.mostHours).map((key) => (
                                    <ListItem key={key}>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    className={classes.bold}>
                                                    {key}
                                                </Typography>
                                            }
                                        />
                                        <ListItemText
                                            primary={
                                                <Typography>
                                                    {props.mostHours[
                                                        key
                                                    ].toLocaleString()}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography
                                className={classes.bold}
                                variant="body1"
                                align="center"
                                gutterBottom>
                                Least Active Hours
                            </Typography>
                            <List dense={true}>
                                {Object.keys(props.leastHours).map((key) => (
                                    <ListItem key={key}>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    className={classes.bold}>
                                                    {key}
                                                </Typography>
                                            }
                                        />
                                        <ListItemText
                                            primary={
                                                <Typography>
                                                    {props.leastHours[
                                                        key
                                                    ].toLocaleString()}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default HoursMonths;
