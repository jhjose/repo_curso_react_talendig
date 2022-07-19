import Nav from "../components/Nav";
import axios from "axios";
import {MenuItem, Select, Button, FormLabel, Input, Card, Switch, Typography} from "@mui/material";
import { useEffect, useState } from "react";
// import Countries from "../lib/Countries.json";

function Register(props) {
    const [countries, setCountries] = useState([
        {
            name: "",
            flag: "",
        },
    ]);
    const [selectedCountryId, setSelectedCountryId] = useState(0);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            let commonNames = res.data.map(c => {
                return {
                    name: c.name.common,
                    flag: `https://countryflagsapi.com/png/${c.name.common}`,
                };
            });
            setCountries(commonNames);
        });
        console.log("countries", countries);
    }, []);

    return (
        <div>
            <Nav />
            <div className='d-flex flex-row flex-wrap justify-content-center mt-5 w-100'>

                <Card className="p-2 d-flex flex-column mt-3">
                    <Typography variant="h5" className='w-100 text-center'>Crear cuenta nueva</Typography>
                    <form className='p-3 w-100 d-flex flex-column' style={{ maxWidth: 350, minWidth: 290 }}>
                        <FormLabel>
                            Correo Electrónico
                        </FormLabel>
                        <Input type='email'
                               name='email'
                               placeholder='Ingrese su correo electrónico'
                               className='mt-2'
                               required="1"
                        >
                        </Input>
                        <FormLabel className="mt-4">
                            País
                        </FormLabel>
                        <Select
                            onChange={event => setSelectedCountryId(event.target.value)}
                            children={countries}
                            className='mt-2'
                            placeholder='Seleccione un País'>
                            {countries.map((value, index) => (
                                <MenuItem key={index} value={index}>
                                    {value.name}
                                </MenuItem>
                            ))}
                        </Select>

                        <Input type="password" name="password" placeholder="Contraseña" className="mt-3" required />
                        <Input type="password" name="password_confirm" placeholder="Nueva Contraseña" className="mt-3" required />

                        <div className="d-flex flex-row align-items-center p-2">
                            <FormLabel htmlFor="password_remember" >Recordar credenciales:</FormLabel>
                            <Switch id="password_remember" className="m-2" />
                        </div>

                        <Button type='submit' variant="contained" className='mt-3 text-white'>Crear cuenta</Button>
                    </form>
                    <img
                        src={selectedCountryId === 0 ? "" : countries[selectedCountryId].flag}
                        alt={selectedCountryId === 0 ? "" : countries[selectedCountryId].name}
                        // className='w-100'
                    />
                </Card>

            </div>
        </div>
    );
}

export default Register;
