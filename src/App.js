
import './App.css';
import React,{Component} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pagesize=20
  render(){
    return(
      <div>
        <Router>
        <NavBar/>
        <Routes>
        < Route path='/' element= { <News  key="general" headlines="Today's" country='in' pagesize={this.pagesize} category='general' />} />
        < Route path='/business' element= { <News  key="business" headlines='Business' country='in' pagesize={this.pagesize} category="business" />} />
        < Route path='/sports' element= { <News  key="sports" headlines='Sports' country='in' pagesize={this.pagesize} category='sports' />} />
        < Route path='/health' element= { <News  key="health" headlines='Health' country='in' pagesize={this.pagesize} category='health' />} />
        < Route path='/science' element= { <News  key="science" headlines='Science' country='in' pagesize={this.pagesize} category='science' />} />
        < Route path='/technology' element= { <News  key="technology" headlines='Techie' country='in' pagesize={this.pagesize} category='technology' />} />
        < Route path='/entertainment' element= { <News  key="entertainment" headlines='Entertainment' country='in' pagesize={this.pagesize} category='entertainment' />} />
        
        </Routes>
        </Router>
      </div>
    )
  }
}
