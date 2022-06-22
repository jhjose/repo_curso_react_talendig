import Clock from './Clock';
import Nav from './Nav';

function Header (props){

    let description = "Esta es un sitio dedicado al aprendizaje de los estudiantes de Talendig.";

    return (
        <header className="App-header">
            <Nav />
            {/*<a*/}
            {/*    className="App-link"*/}
            {/*    href="https://talendig.com/"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*>*/}
            {/*    {props.title_app + ' - '} <Clock/>*/}
            {/*</a>*/}
            {/*<p>{description}</p>*/}
        </header>
    )
}

export default Header;