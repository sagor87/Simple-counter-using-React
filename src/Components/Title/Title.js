import React from 'react';
import './Title.css'



class Title extends React.Component {
   constructor(props){
        super(props)

        this.state = {
            title: "Type Your Counter Title Here",
            isInput:false
        }

   }

   editHandler (){
       this.setState({
           ...this.state,
           isInput:true
       })
   }

   inputChange(event){
        this.setState({
            ...this.state,
            title:event.target.value
        })
   }

   keyPressHandler(event){
       if(event.key ==='Enter'){
           this.setState({
               ...this.state,
               isInput:false
           })
       }
   }

   blurHandler(event){
            this.setState({
            ...this.state,
            isInput:false 
        })
   }

    render() { 

        let output = null
        
        if(this.state.isInput){
            output = (
                <div className="Title">
                        <div class="input-group">
                            <div class="input-group-prepend" >
                                <span class="input-group-text"style={{color:"blue"}}>Title: </span>
                            </div>
                            
                            <input 
                                className="form-control" 
                                style={{color:"green"}}
                                onChange = {(event)=>this.inputChange(event)}
                                onKeyPress = {(event)=>this.keyPressHandler(event)}
                                onBlur = {(event)=>this.blurHandler(event)}
                                type="text" 
                                placeholder = "Type Your Title Here"
                                value={this.state.title}
                                
                            />
                    </div>
                </div>
            )
        }else{
            output = (
                <div className="d-flex Title">
                    <h1 className="display-4">{this.state.title}</h1>
                    <span
                        onClick={()=> this.editHandler()} 
                        className="ml-auto edit-icon">
                        <i className="fas fa-pen"></i>
                     </span> 
                </div>
            )
        }
        return (
            <div>
                {output}
            </div>
          );
    }
}
 
export default Title;