
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Utilities from './components/Utilities';
import Thekongs from './components/Thekongs';
import Mint from './components/Mint';
import Partners from './components/Partners';
import Meet from './components/Meet';
import Faqs from './components/Faqs';
import Roadmap from './components/Roadmap';
import BackToTop from './components/Backtotop';
import Priloder from './components/priloder';

function App() {
  return (
    <div>
      <div className='bg-header-img'>
      <Header/>
      </div>
      <About/>
      <Utilities/>
      <Thekongs/>
      <Mint/>
      <Roadmap/>
      <Partners/>
      <Meet/>
      <Faqs/>
      <BackToTop/>
      <Priloder/>
    </div>
  );
}

export default App;
