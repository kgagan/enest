import React from 'react';
import ReactDOM from 'react-dom';   
import {BrowserRouter as Router , Switch , Link , Route} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Allproducts from './components/Allproducts';
import Buyproduct from './components/Buyproduct';
import NewProducts from './components/NewProducts';
import SpecialProducts from './components/SpecialProducts';
import AllGetProducts from './components/AllGetProducts';
import LogIn from './components/LogIn';
import Checkout from './components/Checkout';
import Search from './components/Search';
//https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router


class MainComponent extends React.Component {
   render() {
      return (
         <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route  path="/new-products" component={NewProducts} />
                <Route  path="/special-products" component={SpecialProducts} />
                <Route  path="/all-products" component={AllGetProducts} />
                <Route  path="/contact" component={Contact} />
                <Route  path="/create-accout" component={LogIn} />
                {/*<Route  path="/about" component={About} />
                <Route  path="/buy-product" component={Buyproduct} />*/}

                <Route path="/show-products/:url" render={(props) => (
                <Allproducts key={props.match.params.url} {...props} />)
                 } />

                <Route path="/buy-products/:url" render={(props) => (
                <Buyproduct key={props.match.params.url} {...props} />)
                 } />

                 <Route path="/search-products/:url" render={(props) => (
                <Search key={props.match.params.url} {...props} />)
                 } />

                <Route  path="/checkout" component={Checkout} />
             </div>
         </Router>
      );
   }
}

export default MainComponent;