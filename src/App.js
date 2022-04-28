import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import Spiner from './components/Spiner';
import  history from './history';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  api="343ad760922647cfbb56c76ad3a8b05c"
  render() {
    return (
        <div>
           
          <Router history={history}>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<News  key="general"pagesize={6} api={this.api} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News key="business"pagesize={6} api={this.api} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainmentt" api={this.api} pagesize={6} country="in" category="entertainment"/>}></Route>
          <Route  exact path="/health" element={<News  key="health"pagesize={6} api={this.api} country="in" category="health"/>}></Route>
          <Route  exact path="/science" element={<News  key="science" pagesize={6} api={this.api} country="in" category="science"/>}></Route>
          <Route  exact path="/sports" element={<News key="sports" pagesize={6} country="in"  api={this.api} category="sports"/>}></Route>
          <Route exactp path="/technology" element={<News key="technology" pagesize={6} country="in" api={this.apiapi} category="technology"/>}></Route>
        </Routes>
        </Router>
       
      </div>

      
    );
  }
}
