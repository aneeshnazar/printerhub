import * as React from "react";

export interface HomeProps { compiler: string, framework: string}

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return <h1>Hello from {this.props.framework} using {this.props.compiler}</h1>
    }
}