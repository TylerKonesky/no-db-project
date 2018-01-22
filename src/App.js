import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
// import Budget from './components/budget2';
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
        {/* <div>
          Category: 
          <select>        
            <option value="food">Food</option>
            <option value="gas">Gas</option>
            <option value="utilities">Utilities</option>
            <option value="mortgage">Mortgage/Rent</option>
            <option value="auto">Auto Expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          Item: 
          <input></input>
        </div>
        <div>
          Cost:
          <input></input>
        </div>
        <div>  
          Date:
          <input></input>
        

          <button className="budget-button">Submit</button>
        </div>
             */}
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
