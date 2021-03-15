import React from "react";

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        this.setState(current_state => ({count: current_state.count + 1}))
    };
    minus = () => {
        this.setState(current_state => ({count: current_state.count - 1}))
    };

    componentDidMount() {
        console.log("rendered")
    }

    componentDidUpdate () {
        console.log("update")
    }

    componentWillUnmount() {
        console.log("Goodbye, cruel world")
    }

    render () {
        console.log("i'm rendering");
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}


export default App;
