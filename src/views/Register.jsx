import Nav from '../components/Nav';

function Register(){
    return (
        <div>
            <Nav />
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5 w-100">
                <h3 className="w-100 text-center">Crear cuenta nueva</h3>
                <form action="" className="card p-3 w-100" style={{maxWidth: 350}}>
                    <input type="email" name="email" placeholder="Correo electrónico" className="" required />
                    <input type="password" name="password" placeholder="Contraseña" className="mt-3" required />
                    <input type="password" name="password_confirm" placeholder="Nueva Contraseña" className="mt-3" required />
                    <button type="submit" className="mt-3 text-primary">Crear cuenta</button>
                </form>
            </div>
        </div>
    )
}

export default Register;