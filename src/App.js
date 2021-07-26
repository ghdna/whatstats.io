import "./App.css";
import { Component } from "react";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import Helmet from "./components/helmet";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import config from "./config";
import demoData from "./data.json";

import Title from "./components/Title";
import MessagesPerMember from "./components/HorizontalBar";
import TotalByLine from "./components/TotalByLine";
import HoursMonths from "./components/HoursMonths";
import WordCloud from "./components/WordCloud";

import Share from "./components/share";
import Trend from "./components/Trend";
import TopTable from "./components/topTable";
import Emoticon from "./components/emoticon";
import Footer from "./components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    async componentDidMount() {
        const search = window.location.search;
        if (Boolean(search)) {
            if (search.split("?q=").length === 2) {
                const key = search.split("?q=")[1];
                if (key === "demo") {
                    if (process.env.NODE_ENV === "development") {
                        this.setState({ data: require("./new_data.json") });
                    } else {
                        this.setState({ data: demoData });
                    }
                } else if (key.split("_")[1].length === 68) {
                    const results = await axios.get(config.getResults + key, {
                        headers: {
                            Peepli: btoa(new Date().toUTCString()),
                            "x-api-key":
                                "ewajU8DEKz32eNlvcEV2V2OuGOnmPFgL4Gfv6Zzv",
                        },
                    });
                    if (results.status === 200) {
                        this.setState({
                            data: results.data,
                        });
                    }
                } else window.location.replace(config.url);
            } else window.location.replace(config.url);
        } else window.location.replace(config.url);
    }

    render() {
        const { innerWidth: width } = window;
        let groupName = null;
        const data = this.state.data;
        groupName = data ? data.groupName : null;

        return (
            <HelmetProvider>
                <CssBaseline />
                <Helmet groupName={groupName} />
                <Container maxWidth="md">
                    {Boolean(data) ? (
                        <>
                            <TotalByLine
                                total={data.total}
                                from={data.from}
                                to={data.to}
                                average={data.average}
                                days={data.days}
                                groupName={groupName}
                                members={data.byMember.labels}
                            />

                            <Share title={groupName} />

                            <Title title={"Who's Doing The Talking? 📣"} />

                            <MessagesPerMember
                                labels={data.byMember.labels}
                                data={data.byMember.data}
                                total={data.total}
                                title={"Messages Per Member"}
                            />

                            <HoursMonths
                                mostHours={data.mostHours}
                                leastHours={data.leastHours}
                                mostMonths={data.mostMonths}
                                leastMonths={data.leastMonths}
                            />
                            <Title title={"Conversation Trend 📈"} />

                            <Trend
                                labels={data.trend.labels}
                                data={data.trend.data}
                                width={width}
                            />
                            <Title title={"Media Leaderboard 🏆"} />
                            <TopTable
                                data={data.media}
                                memberCount={data.byMember.labels.length}
                            />

                            <Title title={"Who's Spreading Positivity 🤗"} />
                            <MessagesPerMember
                                labels={data.sentiment.labels}
                                data={data.sentiment.data}
                                total={data.total}
                                title={
                                    "Sentiment Analysis on Emojis and English words"
                                }
                            />
                            <Title
                                title={"We Mostly Talk About 💬"}
                                caption={
                                    "Word Cloud optimized for English, French, and German"
                                }
                            />

                            <WordCloud data={data.wordCloud} width={width} />

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Title title={"Most Active Dates 📅"} />
                                    <MessagesPerMember
                                        labels={data.mostDates.labels}
                                        data={data.mostDates.data}
                                        total={data.total}
                                        title={"Messages Per Date"}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Title title={"Most Active Days 🌞"} />
                                    <MessagesPerMember
                                        labels={data.mostDays.labels}
                                        data={data.mostDays.data}
                                        total={data.total}
                                        title={"Messages Per Day"}
                                    />
                                </Grid>
                            </Grid>

                            <Title title={"Emoji Leaderboard 👑"} />

                            <Emoticon
                                data={data.emoticon}
                                total={data.emoticonCount}
                            />
                        </>
                    ) : (
                        <>
                            <Skeleton
                                style={{ margin: 30 }}
                                variant="rect"
                                height={100}
                            />
                            <Skeleton
                                style={{ margin: 30 }}
                                variant="rect"
                                height={300}
                            />
                            <Skeleton
                                style={{ margin: 30 }}
                                variant="rect"
                                height={100}
                            />
                        </>
                    )}
                </Container>
                <Footer />
            </HelmetProvider>
        );
    }
}

export default App;
