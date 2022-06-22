import React from "react";
import Client from "./Client";

export default class Numbers extends React.Component {

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {numbers:[]};
        this.client.numbers().then(r => this.setState({numbers:r}));
    }

    render() {
        return (
            <section>
                {
                    this.state.numbers.map(n => <div>{n}</div>)
                }
            </section>
        );
    }
}