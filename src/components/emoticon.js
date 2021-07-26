import {
    Typography,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const rankIcon = ["🥇", "🥈", "🥉"];
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        marginTop: 20,

        //color: theme.palette.text.secondary,
    },
    emojiMember: {
        fontWeight: "bold",
        wordWrap: "break-word",
    },
    emoticon: {
        fontSize: 24,
    },
    heading: {
        paddingRight: 10,
    },
}));

function Emoticon(props) {
    const classes = useStyles();

    const members = Object.keys(props.data);
    let xs = 4;
    let md = 3;
    switch (members.length) {
        case 2:
            xs = 6;
            md = 6;
            break;
        case 3:
            xs = 4;
            md = 4;
            break;
        default:
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {members.map((key, i) => (
                    <Grid key={i} item xs={xs} md={md}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={0}>
                                <Grid item>
                                    <Typography
                                        component="span"
                                        //className={classes.emoticon}
                                        variant="h3"
                                        align="center"
                                        gutterBottom>
                                        {i < 3 ? rankIcon[i] : null}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        component="span"
                                        className={classes.emojiMember}
                                        variant="body1"
                                        align="center"
                                        gutterBottom>
                                        {key}
                                    </Typography>
                                    <Typography
                                        //className={classes.bold}
                                        variant="body2"
                                        align="left"
                                        gutterBottom>
                                        {Math.floor(
                                            (props.data[key].count /
                                                props.total) *
                                                100
                                        ) +
                                            "% (" +
                                            props.data[
                                                key
                                            ].count.toLocaleString() +
                                            ")"}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <List dense={true}>
                                {Object.keys(props.data[key].emojis).map(
                                    (emoticon) => (
                                        <ListItem key={emoticon}>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h5">
                                                        {emoticon}
                                                    </Typography>
                                                }
                                            />
                                            <ListItemText
                                                primary={
                                                    <Typography variant="subtitle1">
                                                        {props.data[key].emojis[
                                                            emoticon
                                                        ].toLocaleString()}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    )
                                )}
                            </List>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Emoticon;
