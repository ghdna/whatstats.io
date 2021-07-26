import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from "react-share";
import { Chip, Grid } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import config from "../config";

const useStyles = makeStyles((theme) => ({
    shareButton: {
        cursor: "pointer",
        "&:hover:not(:active)": {
            opacity: "0.75",
        },
    },
    chip: {
        cursor: "pointer",
    },
}));

function Share(props) {
    const classes = useStyles();

    const shareUrl = "https://my.whatstats.io" + window.location.search;
    const title = "WhatStats for " + props.title;

    const handleClick = () => {
        window.location.href = config.url + "/#GettingStarted";
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <Chip
                    icon={<Refresh />}
                    label="Start Over"
                    variant="outlined"
                    onClick={handleClick}
                    className={classes.chip}
                />
            </Grid>
            <Grid item xs={6}>
                <div style={{ textAlign: "right" }}>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className={classes.shareButton}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className={classes.shareButton}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        className={classes.shareButton}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        body="body"
                        className={classes.shareButton}>
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div>
            </Grid>
        </Grid>
    );
}

export default Share;
