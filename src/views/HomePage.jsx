import Header from '../components/Header';

function HomePage(){

    let titles = {
        'title_1': 'Curso Intensivo de React - Talendig',
    }

    return (
        <Header title_app={titles.title_1} />
    );
}

export default HomePage