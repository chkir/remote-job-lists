import { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router'
import config from '../config';

class Meta extends Component {
    render() {
        return (
            <Head>
                <title>{this.props.title}</title>
                <meta property="og:title" content={this.props.title} />
                <meta property="og:description" content={this.props.description} />
                <meta property="og:image" content={`${config.host}/static/screenshot.png`} />
                <meta property="og:url" content={this.props.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:site_name" content="Remote Job Lists" />
                <meta name="twitter:creator" content="@tilomitra" />
                <meta name="twitter:title" content={this.props.title} />
                <meta name="twitter:description" content={this.props.description} />
                <meta name="twitter:image" content={`${config.host}/static/screenshot.png`} />
            </Head>
        )
    }
}

export default Meta;
