import '#app/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import { Header, Footer } from "#components";
// Pages
import { Home, Contact, Writing } from "#pages";


const App = () => {
  return (
    <Router>
      <div className="App bg-light ">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/writing/:slug1/:slug2" exact component={() => <Writing />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
