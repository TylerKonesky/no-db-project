import React, { Component } from 'react';
import axios from 'axios';
import '../../src/App.css';

class NewBudgetItem extends Component {
    constructor(props){
        super(props);
         
        this.state = {
          category:'',
          item: '',
          cost: '',
          date: '',
          newList: [],
          increase: "increase",
          decrease: "decrease"
          
        };
        this.addItem = this.addItem.bind(this);
        this.remove = this.remove.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
      }

      componentWillMount(){
        axios.get(`/api/budget`).then(results=>{
            this.setState({newList:results.data})
      })}

      addItem(event){
        event.preventDefault();  
            axios.post('/api/budget',{category:this.state.category, item:this.state.item, cost:this.state.cost, date:this.state.date}).then(results=>{                   
                axios.get(`/api/budget`).then(results=>{
                    this.setState({newList:results.data})
            
          })})
      };

    remove(id){
        axios.delete('/api/budget/' + id).then(results=>{
            axios.get(`/api/budget`).then(results=>{
                this.setState({newList:results.data})
  
     }) }) }
    increase(id){
        console.log(id)
        axios.put('/api/budget/' + id,{button:this.state.increase}).then(results=>{            
                this.setState({newList:results.data})
        }) } 

    decrease(id){
        axios.put('/api/budget/' + id,{button:this.state.decrease}).then(results=>{
                this.setState({newList:results.data})
        }) } 


      render() {
        let results = this.state.newList.map((obj)=>{ 

            return (<div key={obj.id} className="main-body-list">
                    <div > Category: {obj.category}</div>
                    <div > Item: {obj.item}</div>
                    <div > Cost: {obj.cost}</div>
                    <div > Date: {obj.date}</div>
                    <button onClick={()=> this.remove(obj.id)}> remove </button> 
                    <button onClick={()=> this.increase(obj.id)}> increase </button>
                    <button onClick={()=> this.decrease(obj.id)}> decrease </button>
                    
                                
            </div>)})
        return (
    <form >
    <div className="main-body">
        <div>
          Category: 
          <select type="text" onChange={(event)=> {this.setState({category: event.target.value})}}>        
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
          <input type="text" onChange={(event)=> {this.setState({item: event.target.value})}}></input>
        </div>
        <div>
          Cost:
          <input type="text" onChange={(event)=> {this.setState({cost: event.target.value})}}></input>
        </div>
        <div>  
          Date:
          <input type="text"onChange={(event)=> {this.setState({date: event.target.value})}}></input>
        

          <button className="budget-button" onClick={(e)=>this.addItem(e)} >Submit</button>
        </div>
    </div>

        {results}

      
           
    </form>
        
        
        )        
    }
}

export default NewBudgetItem;