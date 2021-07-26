import { withStyles } from "@material-ui/core/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
} from "@material-ui/core";

import {
    PhotoCamera,
    Link,
    Videocam,
    Mms,
    Print,
    SlowMotionVideo,
    VolumeUp,
    Label,
    ContactPhone,
} from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            "&:first-child": {
                width: "20vw !important",
            },
            padding: "6px !important",
            width: "26vw",
            maxWidth: "26vw",
            wordWrap: "break-word",
        },
    },
    head: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        color: theme.palette.common.black,
        textAlign: "left",
        fontSize: 50,
        height: 60,
        //variant: "h3",
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function TopTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="Media Leader Board">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>🥇</StyledTableCell>
                        <StyledTableCell>🥈 </StyledTableCell>
                        {props.memberCount > 2 && (
                            <StyledTableCell>🥉</StyledTableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {firstColumn(row)}
                            </StyledTableCell>
                            {chopchop(row.first)}
                            {chopchop(row.second)}
                            {props.memberCount > 2 && chopchop(row.third)}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TopTable;

function chopchop(row) {
    let final = <StyledTableCell />;
    if (row !== undefined) {
        let memberName = row.split("|")[0];

        final = (
            <StyledTableCell>
                <Typography>{memberName}</Typography>
                <Typography variant="subtitle2">{row.split("|")[1]}</Typography>
            </StyledTableCell>
        );
    }

    return final;
}

function firstColumn(row) {
    let icon = null;
    let rowName = row.name;
    switch (row.name) {
        case "videos":
            icon = <Videocam />;
            break;
        case "images":
            icon = <PhotoCamera />;
            break;
        case "medias":
            icon = <Mms />;
            rowName = "MEDIA";
            break;
        case "links":
            icon = <Link />;
            break;
        case "documents":
            icon = <Print />;
            rowName = "DOCS";
            break;
        case "gifs":
            icon = <SlowMotionVideo />;
            break;
        case "audios":
            icon = <VolumeUp />;
            break;
        case "stickers":
            icon = <Label />;
            rowName = "STKRS";
            break;
        case "cards":
            icon = <ContactPhone />;
            break;
        default:
            icon = null;
    }

    return (
        <>
            <Grid container>
                <Grid item>{icon}</Grid>
                <Grid item>
                    <Typography style={{ paddingLeft: 5 }} variant="subtitle2">
                        {row.count.toLocaleString()}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="subtitle2">{rowName.toUpperCase()}</Typography>
        </>
    );
}
