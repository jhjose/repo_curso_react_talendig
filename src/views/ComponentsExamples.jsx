import React from 'react';
import { Link } from "react-router-dom";

class ComponentsExamples extends React.Component {

    render() {
        return (
            <div>
                <h5 className="text-center p-2" style={{backgroundColor: "#7e7e7e", color: "white"}}>Componentes de ejemplo:</h5>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="p-2 m-2 border">
                        <Link to="/counter">Contador</Link>
                    </div>
                    <div className="p-2 m-2 border">
                        <Link to="/chronometer">Cron&oacute;metro</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentsExamples;