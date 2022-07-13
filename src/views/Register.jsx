import Nav from '../components/Nav';
import axios from "axios";
import {MenuItem, Select} from "@mui/material";
import {useEffect, useState} from "react";
// import Countries from "../lib/Countries.json";

function Register(props){

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
            .then((res)=>{
                res.data.map(function (c){
                    console.log('c.name.common', c.name.common);
                    setCountries([...countries, c.name.common]);
                });
            });

        console.log('countries', countries);
    }, []);

    return (
        <div>
            <Nav />
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5 w-100">
                <h3 className="w-100 text-center">Crear cuenta nueva</h3>
                <form action="" className="card p-3 w-100" style={{maxWidth: 350}}>
                    <input type="email" name="email" placeholder="Correo electrónico" className="" required />

                    <Select
                        children={countries}
                        class="mt-2"
                        label="Países"
                    >
                        {countries.map(function (value){
                            return <MenuItem value={value}>value</MenuItem>
                        })}
                        <MenuItem value={10}>Ten</MenuItem>
                    </Select>

                    {/*<select name="" id="">*/}
                    {/*    {countries.map(function (value){*/}
                    {/*        return <option value={value}>{value}</option>*/}
                    {/*    })}*/}
                    {/*</select>*/}

                    <input type="password" name="password" placeholder="Contraseña" className="mt-3" required />
                    <input type="password" name="password_confirm" placeholder="Nueva Contraseña" className="mt-3" required />
                    <button type="submit" className="mt-3 text-primary">Crear cuenta</button>
                </form>
            </div>
        </div>
    )
}

export default Register;