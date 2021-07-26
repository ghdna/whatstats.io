import { Helmet } from "react-helmet-async";
import config from "../config";

export default function MyHelmet(props) {
    let title = config.title;
    let description = config.description;
    let url = config.demoUrl;

    if (props.groupName) {
        title = props.groupName + " : " + title;
        description = props.groupName + " : " + description;
        url = window.location.href;
    }

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="title" content={title} />
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={config.logoUrl}></meta>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta property="twitter:image" content={config.logoUrl}></meta>
        </Helmet>
    );
}
