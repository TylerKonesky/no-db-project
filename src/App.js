import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import SetBudget from './components/setbudget';
import Names from "./components/name";
import NewBudgetItem from "./components/newitems";
import alert from "./components/randobutton"
import Meaningless from "./components/meaningless"
import axios from "axios";
import Meaningful from "./components/meaningful"
import Trivia from "./components/german"


class App extends Component {
  render() {
    return (
    <div>
     
      <div>
        <Names/>
        
      </div>

      <div className="budget"> 
              
      {alert()}
           <SetBudget/>
          
      
      </div>
      

      <div className="main-body">
        <NewBudgetItem/>
       
      </div>

      <div>
        <Meaningless/>
        <Meaningful/>
        <Trivia/>
     
      </div>
      
      
        
      
    </div>


     
      
      
      

    

      

      
      
    );
  }
}

export default App;
