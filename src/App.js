import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        {/* header will be display all pages */}
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/faq">
            <Faq></Faq>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer will be display all pages */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
