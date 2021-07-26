import React from "react";
import {
    Typography,
    BottomNavigation,
    BottomNavigationAction,
} from "@material-ui/core/";
import { Home, Assessment, Security } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import discordIcon from "@iconify-icons/mdi/discord";
import config from "../config";

function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(4);

    const copyright = `Copyright © ${new Date().getFullYear()}.`;

    return (
        <footer className={classes.footer}>
            <BottomNavigation
                value={value}
                showLabels
                onChange={(event, newValue) => {
                    setValue(newValue);
                    switch (newValue) {
                        case 0:
                            window.location.href = config.url;
                            break;
                        case 1:
                            window.location.href =
                                config.url + "/#GettingStarted";
                            break;
                        case 2:
                            window.location.href = config.url + "/#Privacy";
                            break;
                        case 3:
                            window.open(config.discordServer, "_blank");
                            break;
                        default:
                    }
                }}
                className={classes.root}>
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction
                    label="Run New Analysis"
                    icon={<Assessment />}
                />
                <BottomNavigationAction label="Privacy" icon={<Security />} />
                <BottomNavigationAction
                    label="Reach me @ Discord"
                    icon={<Icon icon={discordIcon} height="1.8em" />}
                />
            </BottomNavigation>
            <Typography
                component="h3"
                variant="subtitle2"
                className={classes.endNote}
                style={{ paddingTop: 30 }}>
                The purpose of WhatStats.io is to provide some{" "}
                <i>entertainment value</i>
            </Typography>
            <Typography
                component="div"
                variant="body2"
                className={classes.endNote}>
                There are no monetization aspirations. This is a fun
                side-project. For questions, concerns, or comments, you can
                reach out to me anonymously on the{" "}
                <a
                    href="https://discord.com/invite/jkyg3gQwEY"
                    target="_blank"
                    rel="noopener noreferrer nofollow">
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.green}>
                        WhatStats.io Discord
                    </Typography>
                </a>{" "}
                (no signup required)
            </Typography>
            <Typography
                variant="body2"
                className={classes.copyright}
                color="textSecondary"
                align="center">
                {copyright}
            </Typography>
        </footer>
    );
}

export default Footer;

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        marginTop: 20,
    },
    copyright: {
        padding: 10,
        fontSize: 10,
    },
    green: {
        color: "#10a125",
        //padding: 10,
    },
    endNote: {
        color: "#666",
        textAlign: "center",
    },
}));
