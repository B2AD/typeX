//import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing/landing';
import Content from './components/Content/content';
import AppPortal from './components/AppPortal/appportal';
import AuI from './components/AugmentedIntel/augment';
import NavX from './components/Navbar/x_navbar';
import CountryReach from './components/Country Reach/countryreach';
import ConnectPOC from './components/ConnectPoc/connectpoc';
import SolutionNeed from './components/solution/solution';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className="App">
     <NavX/>
      <Landing/>
      <Content/>
      <AppPortal/>
      <CountryReach/>
      <AuI/>
      <ConnectPOC/>
      <SolutionNeed/>
      <Footer/>

    </div>
  );
}

export default App;
