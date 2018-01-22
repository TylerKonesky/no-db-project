import React, { Component } from 'react';
import '../../src/App.css';
import '../../src/reset.css';
import axios from "axios";
import alert from "./randobutton.js"


class Meaningless extends Component {
    constructor(props){
        super(props);
        this.state={
            swanson:""
        }
        
    }
    componentWillMount(){
        {axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(results=>{
            this.setState({swanson:results.data})
        }
    )
    }
};

render() {
       return (
           <div>
               Swanson Quote: {this.state.swanson}
           </div>
       )
    
}
}

export default Meaningless;