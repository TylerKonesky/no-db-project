// import React, {Component} from 'react';

// export default class Budget extends Component
//     constructor(props){
//         super(props);

//     }
        delete (id){
            axios.delete("url/budget/" + id).then()
        }
//     render() {
//       return ()
            
//         arr.map((budgetItem)=>{
//         return (<div>
//                     <div className="category"> {budgetItem.category}</div>
//                     <div className="category"> {budgetItem.item}</div>
//                     <div className="category"> {budgetItem.cost}</div>
//                     <div className="category"> {budgetItem.date}</div>
//                     <button onClick=( ()=> this.delete(budgetItem.id) )>remove</button> 
//                     <button onClick=( ()=> this.increase(budgetItem.id) )>increase</button>
//                     <buttononClick=( ()=> this.decrease(budgetItem.id) )>decrease</button>
                        
//                 </div>)
//         }) 
//     }