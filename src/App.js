import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Card } from './components/Card/Card';
import { CardsList } from './data';

function App() {
    const cards = CardsList.map((card) => <Card key={card.id} card={card} />);

    return (
        <div className='App'>
            <Header />
            <Hero />
            <div className='cards-list'>
                {cards}
            </div>
        </div>
    );
}

export default App;
