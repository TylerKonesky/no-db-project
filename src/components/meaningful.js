import React, { Component } from 'react';
import '../../src/App.css';
import '../../src/reset.css';
import axios from "axios";
import alert from "./randobutton.js"


class Meaningful extends Component {
    constructor(props){
        super(props);
        this.state={
            advice:""
        }
        
    }
    componentWillMount(){
        {axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then(results=>{
            this.setState({advice:results.data.message})
        }
    )
    }
};

render() {
       return (
           <div>
               Trumps Daily Advice: {this.state.advice}
           </div>
       )
    
}
}

export default Meaningful;