import React, { Component } from 'react';
import '../../src/App.css';
import '../../src/reset.css';
import axios from "axios";
import alert from "./randobutton.js"


class Trivia extends Component {
    constructor(props){
        super(props);
        this.state={
            current:""
        }
        
    }
    componentWillMount(){
        {axios.get(' http://worldclockapi.com/api/json/est/now').then(results=>{
            this.setState({current:results.data.currentDateTime})
        }
    )
    }
};

render() {
       return (
           <div>
               Current Date and Time:  {this.state.current}
           </div>
       )
    
}
}

export default Trivia;