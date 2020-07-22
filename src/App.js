import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles:[]
    }
  }
  componentDidMount() {
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e04ba55f53e4ada8976f429232abe5a')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles: myJson.articles
    });
  });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Triveous News</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">BUISNESS</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">WORLD</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">POLITICS</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">TECH</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">SCIENCE</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Get the latest news</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
      
      {this.state.articles.map((item, index)=>{
        return(
          <div>
          <h2 style={{textAlign:'left'}}>
            <a href={item.url}> {item.title} </a>
          </h2>
          <img src={item.urlToImage} style={{width:'50vw'}}/>
          <p>{item.content}</p>
          </div>
        );
      })}
     
      </div>
    );
  }
}

export default App;
