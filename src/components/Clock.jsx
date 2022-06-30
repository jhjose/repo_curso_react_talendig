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
            <div className="m-3 w-100 d-flex flex-row justify-content-center" style={{margin: 'auto'}}>
                <div className="d-flex flex-column">
                    <h1 className="text-center">Hello, world</h1>
                    <h2 className="text-center">It is {this.state.date.toLocaleTimeString()}</h2>
                </div>
            </div>
        );
    }
}

export default Clock;