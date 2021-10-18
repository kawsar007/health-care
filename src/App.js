import './App.css';
import Announcement from './components/announcement/Announcement';
import CarouselSlider from './components/carousel/CarouselSlider';
import Header from './components/header/Header';
import ServicesType from './components/services-type/ServicesType';
import Specialists from './components/specialists/Specialists';

function App() {
  return (
    <div className="app">
      <Announcement/>
      <Header/>
      <CarouselSlider/>
      <ServicesType/>
      <Specialists/>
    </div>
  );
}

export default App;
