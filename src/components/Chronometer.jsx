import React from 'react';
import Nav from "./Nav";
import {Button} from "@mui/material";

class Chronometer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startTS: null,
            diff: null,
            suspended: 0,
            interval: null
        }

        this.onKeyDown = this.onKeyDown.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.tick = this.tick.bind(this);
        this.addZero = this.addZero.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (e) => {
        e.preventDefault();

        e.keyCode === 32 && this[!this.state.startTS ? 'start' : 'stop']();

        // Reset on [espace]
        e.keyCode === 27 && this.reset();
    }

    start = () => {
        if(this.state.startTS){
            return;
        }
        this.setState({
            startTS: +new Date() - this.state.suspended,
            interval: requestAnimationFrame(this.tick),
            suspended: 0
        });
    }

    stop = () => {
        cancelAnimationFrame(this.state.interval);
        this.setState({
            startFS: null,
            suspended: +this.state.diff
        });
    }

    reset = () => {
        cancelAnimationFrame(this.state.interval);
        this.setState({
            startTS: null,
            diff: null,
            suspended: 0,
            interval: null
        });
    }

    tick = () => {
        this.setState({
            diff: new Date(+new Date() - this.state.startTS),
            interval: requestAnimationFrame(this.tick)
        });
    }

    addZero = (n) => {
        return n < 10 ? '0' + n : n;
    }

    render() {
        const diff = this.state.diff;
        let hundredths = diff ? Math.round(this.state.diff.getMilliseconds() / 10) : 0;
        const seconds = diff ? this.state.diff.getSeconds() : 0;
        const minutes = diff ? this.state.diff.getMinutes() : 0;

        if(hundredths === 100) hundredths = 0;

        return (
            <div className="d-flex flex-column align-items-center">
                <Nav />
                <h4 className="text-center p-2 m-1 w-100">Cron&oacute;metro</h4>
                <section className="d-flex flex-column">
                    <h3 className="w-100 text-center">{this.addZero(minutes)}:{this.addZero(seconds)}:{this.addZero(hundredths)}</h3>
                    <div className="mt-2">
                        <Button variant="outlined" className="m-2" onClick={this.start}>START</Button>
                        <Button variant="outlined" className="m-2" onClick={this.stop} >STOP</Button>
                        <Button variant="outlined" className="m-2" onClick={this.reset}>RESET</Button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Chronometer;