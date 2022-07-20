import Header from '../components/Header';
import Clock from '../components/Clock';
import ComponentsExamples from './ComponentsExamples';

function HomePage(){

    let titles = {
        'title_1': 'Curso Intensivo de React - Talendig',
    }

    return (
        <div>
            <Header title_app={titles.title_1} />
            <Clock />
            <ComponentsExamples />
        </div>
    );
}

export default HomePage