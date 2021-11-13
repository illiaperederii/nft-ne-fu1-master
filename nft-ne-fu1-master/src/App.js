import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { CONFIG } from './data/ChainData';
import Home from './pages/Home';
import Footer from './root/Footer';
import Header from './root/Header';
import Web3Wrapper from './web3/wrapper/Web3Wrapper'


function App() {
  return (
    <div className="App">
      <Router>
        <Web3Wrapper config={CONFIG}>
        <Header />
        <Switch>

          <Route path='/projects/nft-ne-fu1'>
            <Home />
          </Route>
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
        <Footer />
        </Web3Wrapper>
      </Router>
    </div>
  );
}

export default App;
