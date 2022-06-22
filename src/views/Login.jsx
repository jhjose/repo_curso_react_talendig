import Nav from '../components/Nav';

function Login(){
    return (
        <div>
            <Nav />
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5 w-100">
                <h3 className="w-100 text-center">Iniciar sesión</h3>
                <form action="" className="card p-3 w-100" style={{maxWidth: 350}}>
                    <input type="email" placeholder="Correo electrónico" className="" required />
                    <input type="password" placeholder="Contraseña" className="mt-3" required />
                    <button type="submit" className="mt-3 text-primary">Iniciar sesión</button>
                </form>
            </div>

        </div>
    )
}

export default Login;