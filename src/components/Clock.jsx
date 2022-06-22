import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date,
            user: 1
        }
    }

    componentDidMount(){
        setInterval( ()=> {
            this.setState({date: new Date()});
            this.setState({user: 2})
        },
        1000
        )
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;