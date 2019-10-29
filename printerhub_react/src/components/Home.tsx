import * as React from "react";

export interface HomeProps { compiler: string, framework: string, location: string}

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return <h1>Hello from {this.props.framework} using {this.props.compiler} on {this.props.location}</h1>
    }
}