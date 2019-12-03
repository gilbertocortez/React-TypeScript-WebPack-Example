import * as React from "react";

export interface HelloWorldProps { firstName: string; lastName: string; }

// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
export class HelloWorld extends React.Component<HelloWorldProps, {}> {
    render() {
        return <h1>Hi there from React! My name is {this.props.firstName} {this.props.lastName} and I am an expert React, TypeScript and WebPack developer!</h1>;
    }
}