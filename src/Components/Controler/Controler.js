import React, { Component } from 'react';

class Controler extends Component {
    constructor(props){
        super(props)
    
            this.state = { 
                start:true,
                pause:false,
                lap:false,
                reset:false
            }
    }

    startHandler(){
        this.setState({
            ...this.setState,
            start:false,
            pause: true,
            lap:true
        })
        this.props.start()
    }

    pauseHandler(){
        this.setState({
            start:true,
            pause:false,
            lap:false,
            reset:true
        })
        this.props.pause()
    }

    lapHandler(){
        this.props.lap()
    }

    resetHandler(){
        this.setState({
            start:true,
            pause:false,
            lap:false,
            reset:false
        }) 
        this.props.reset()
        
    }

    getControler(){
        let output = null
        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button
                        className="btn btn-success btn-lg px-5 ml-5"
                        onClick ={event=> this.startHandler()}
                        >Start
                    </button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
           output =(
                <div>
                    <button
                        class="btn btn-primary btn-lg px-5 ml-5"
                        onClick ={event=> this.pauseHandler()}
                        >Pause
                    </button>
                    <button
                        class="btn btn-warning btn-lg px-5 ml-5"
                        onClick ={event=> this.lapHandler()}
                        >Lap
                    </button>
                </div>
           )
        }else if(this.state.start && this.state.reset){
            output = (
                <div className="my-7">
                    <button
                        class="btn btn-success btn-lg px-5 ml-5"
                        onClick ={event=> this.startHandler()}
                        >Start
                    </button>
                    <button
                        class="btn btn-danger btn-lg px-5 ml-5"
                        onClick ={event=> this.resetHandler()}
                        >Reset
                    </button>
                </div>
            )
        }
        return output
    }

    render() { 
        return this.getControler()
          
    }
}
 
export default Controler;