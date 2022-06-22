import { Outlet, Link } from "react-router-dom";

function Nav(){
    return (
        <div className="d-flex flex-row justify-content-between align-items-center flex-wrap w-100" style={{border: '1px solid black'}}>
            <span className="p-3 text-primary">
                <Link to="/" class="text-primary">Project Learn</Link>
            </span>
            <div className="pt-3 pb-3 pl-5 pr-5 d-flex flex-row justify-content-center align-items-center" style={{minWidth: 290, width: "30%"}}>
                <Link to="/login">Iniciar sesión</Link>
                <div className="m-2">|</div>
                <Link to="/register">Crear cuenta</Link>
            </div>
            <span className="p-3">Menú</span>
        </div>
    )
}

export default Nav