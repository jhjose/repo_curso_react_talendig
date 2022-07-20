import React from 'react';
import Nav from './Nav';
import {Button} from "@mui/material";

class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    sumCount(){
        this.setState((prevState, props)=>{
            return { count: prevState.count + 1 }
        })
    }

    restCount(){
        this.setState((prevState)=>{
            return { count: prevState.count -1 }
        })
    }

    render(){
        return (
            <div>
                <Nav />
                <h4 className="text-center p-2 m-1 w-100">Contador</h4>
                <div className="p-2 d-flex flex-row justify-content-center">
                    <div className="m-2">
                        <h6 className="text-center">Función aumentar</h6>
                        <Button variant="outlined" onClick={()=> this.sumCount()}>
                            Aumentado a {this.state.count} veces
                        </Button>
                    </div>
                    <div className="m-2">
                        <h6 className="text-center">Función disminuir</h6>
                        <Button variant="outlined" onClick={()=> this.restCount()}>
                            Disminuido a {this.state.count} veces
                        </Button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Counter;