import Nav from '../components/Nav';
import axios from 'axios';
import {encode, decode} from 'string-encode-decode';
import {isDisabled} from "@testing-library/user-event/dist/utils";
import Button from '@mui/material/Button';
import {useState} from "react";

function Login(props){

    const [state, setEnable] = useState(1);

    function handleSubmit(e){
        e.preventDefault();

        let email = document.getElementById('email').value;
        // let password = encode(document.getElementById('password').value);
        let password = document.getElementById('password').value;
        let password_remember = document.getElementById('password_remember').value;

        if(password_remember){
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);
        }

        axios.post(process.env.REACT_APP_ROUTE_BACK + '/login', {
            params: {
                email: email,
                password: password
            }
        }).then(response=>{
            console.log('response', response);
        }).catch((error)=>{
            console.log('error', error);
        });
    }

    return (
        <div>
            <Nav />
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5 w-100">
                <h3 className="w-100 text-center">Iniciar sesión</h3>
                <form onSubmit={handleSubmit} className="card p-3 w-100" style={{maxWidth: 350}}>
                    <input name="email" id="email" type="email" placeholder="Correo electrónico" className="" required />
                    <input name="password" id="password" type="password" placeholder="Contraseña" className="mt-3" required />

                    <div className="d-flex flex-row align-items-center p-2">
                        <label htmlFor="password_remember" >Recordar credenciales:</label>
                        <input id="password_remember" className="m-2" name="password_remember" type="checkbox" />
                    </div>

                    <Button type="submit" className="mt-3 text-primary" disabled={!state} variant="contained">Iniciar sesión</Button>
                    {/*<button type="submit" className="mt-3 text-primary" disabled={!state}>Iniciar sesión</button>*/}
                </form>
            </div>

        </div>
    )
}

export default Login;