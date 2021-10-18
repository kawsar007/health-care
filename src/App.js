import './App.css';
import Announcement from './components/announcement/Announcement';
import CarouselSlider from './components/carousel/CarouselSlider';
import Header from './components/header/Header';
import ServicesType from './components/services-type/ServicesType';

function App() {
  return (
    <div className="app">
      <Announcement/>
      <Header/>
      <CarouselSlider/>
      <ServicesType/>
    </div>
  );
}

export default App;
