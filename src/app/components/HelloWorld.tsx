import * as React from "react";

export interface HelloWorldProps { firstName: string; lastName: string; }

// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
export class HelloWorld extends React.Component<HelloWorldProps, {}> {
    render() {
        return <h1>Hi there from React! {this.props.firstName} and {this.props.lastName} and I am an expert developer!</h1>;
    }
}