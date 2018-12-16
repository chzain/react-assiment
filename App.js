import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Component/Home';
import CreateProduct from './Component/createproduct';
import EditProduct from './Component/editproduct';
import ReadOne from './Component/readone';
import './App.css';

import {Provider} from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <BrowserRouter>
      <div>
        <Switch>

    <Route path="/createproduct" component={CreateProduct}/>
    <Route path="/editproduct/:id" component={EditProduct}/>
    <Route path="/readone/:id" component={ReadOne}/>

    <Route path="/" component={Home}/>
    </Switch>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
