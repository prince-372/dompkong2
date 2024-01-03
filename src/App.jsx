
import './App.css';
import { useEffect } from 'react';
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
import { Tabs } from 'flowbite';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Navhead from './components/Nevhead';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Header/>
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
      {/* <Tabs/> */}
    </div>
  );
}

export default App;
