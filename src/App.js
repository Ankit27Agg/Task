import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner'
import Information from './Components/Information/Information'
import Cart from './Components/Cart/Cart';
import PriceTag from './Components/PriceTag/PriceTag';
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <div style={{marginLeft:'auto', marginRight:'auto', width: '375px'}}>
      <Header />
      <Banner />
      <Information />
      <PriceTag />
      <Card months='1' saving='38' tubes='4' oldprice='795' newprice='595' popular='yes' />
      <Card months='3' saving='12' tubes='12' oldprice='999' newprice='899' popular='no' />
      <Cart />

      </div>
    </div>
  );
}

export default App;
