import { Typography, Grid, Chip, Card, CardContent } from "@material-ui/core";
import config from "../config";

function TotalByLine(props) {
    const fromDate = new Date(props.from);
    const toDate = new Date(props.to);
    const range = (toDate - fromDate) / 86400000;
    const from = `${fromDate.toDateString().substring(4)} - ${toDate
        .toDateString()
        .substring(4)}`;
    const title = props.groupName ? props.groupName : null;
    const days =
        range > 366
            ? (range / 365).toFixed(1) + " Years"
            : range.toFixed(0).toLocaleString() + " Days";

    return (
        <>
            <Card variant="outlined">
                <Grid justify="center" container style={{ paddingTop: 10 }}>
                    <Grid item>
                        <a href={config.url}>
                            <img
                                layout="constrained"
                                src={
                                    window.location.origin +
                                    "/WhatStats_Logo_S.png"
                                }
                                alt={config.title}
                                width={40}
                                height={40}
                            />
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={config.url}>
                            <Typography
                                align="center"
                                style={{ color: "#10a125" }}
                                component="h2"
                                variant="h4">
                                WhatStats
                            </Typography>
                        </a>
                    </Grid>
                </Grid>
                <CardContent>
                    <Typography
                        align="center"
                        component="h1"
                        variant="h5"
                        gutterBottom>
                        {title}
                    </Typography>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Typography
                                component="h6"
                                variant="subtitle2"
                                align="center"
                                color="textPrimary"
                                gutterBottom>
                                <Chip
                                    label={props.members.length + " Members"}
                                />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                component="h6"
                                variant="subtitle2"
                                align="center"
                                color="textPrimary"
                                gutterBottom>
                                <Chip
                                    label={
                                        props.total.toLocaleString() +
                                        " Messages"
                                    }
                                />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                component="h6"
                                variant="subtitle2"
                                align="center"
                                color="textPrimary"
                                gutterBottom>
                                <Chip label={days} />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                component="h6"
                                variant="subtitle2"
                                align="center"
                                color="textPrimary"
                                gutterBottom>
                                <Chip
                                    label={
                                        "~" +
                                        props.average.toLocaleString() +
                                        " Messages/Day"
                                    }
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        component="h6"
                        variant="overline"
                        align="center"
                        color="textPrimary">
                        {from}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default TotalByLine;
