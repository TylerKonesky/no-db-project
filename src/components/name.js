import React, { Component } from 'react';
import '../../src/App.css';
import '../../src/reset.css';
import axios from "axios";
import alert from "./randobutton.js"


class Names extends Component {
    constructor(props){
        super(props);
        
    }
    
      

    
      render() {
        
        return (         
                   
            <div>

                <div className="header">    

                <div className="header-left">

                Tyler Konesky
                

            </div>

        <div className="header-middle">

            <img src="https://api.adorable.io/avatars/78/Tyler.png" width="50" height="50" alt="logo" />

            <h1>Welcome, Tyler</h1>

        </div>

            <div className="header-right">

            <div>
              Name:
              <input className="input-box"></input> 
              {/* onChange={(event)=> event.target.value} */}
              
              
              
              <button type="submit" className="button"> Login </button>
            </div>

            </div>  
        </div>
            
            
    
            
    </div>
            
        )
    }
}

export default Names;