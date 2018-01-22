import React, { Component } from 'react';
import axios from 'axios';
import '../../src/App.css';
import '../../src/reset.css';



class SetBudget extends Component {
    constructor(props){
        super(props);
         
        this.state = {
          budget:0,
          newArr:[],
          
    
        };
        this.test = this.test.bind(this);
    }



      
        test(e){
           e.preventDefault();
           
           let tempArr = [];
           axios.get('/api/budget').then(results=>{
           for(var i=0;i<results.data.length;i++){
               tempArr.push(results.data[i].cost)
               console.log(this.state.newArr)
           } let sum = Number(tempArr.reduce((cur, acc)=> (cur*1) + (acc*1)),0)
           console.log(sum)
           this.setState({budget:this.refs.inputField.value-sum})
            console.log(this.refs.inputField.value)
            
        })}
    results
      render() {
        
        return (<div className="budget">

                <div className="budget-view">Available Budget
                <span>{this.state.budget}</span>
                </div>

          <div className="set-budget"> Set Budget:  
                   
            <div>
            
            <form onSubmit={event => (this.test(event))}>
                <input type="text" ref="inputField" 
                 placeholder="set budget"/>

              <button type="submit"  > Submit </button>
            </form>
    
            
            </div>
            </div>
            </div>
        )
    }
}

    export default SetBudget;