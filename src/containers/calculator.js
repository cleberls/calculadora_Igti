import {Component} from 'react';
import Button from '../components/button';
import Display from '../components/display';


//const { Component } = require("react");
//const { default: Display } = require("../components/display");

class Calculator extends Component{

  initialState = {first:0, second:0, operator:1, isSum:false, isM:false}
  constructor(props){
    super(props);
    this.state = this.initialState;     
  }

  getValue = () =>{
    const {first,second,isSum,isM,operator} = this.state;
      switch(operator){
        case 1: return first;
        case 2: return second;
        case 3: return isSum? first + second : first - second;        
        case 4: return isM? first * second : first / second;          
      }    
  }

  putValue = (value) =>{    
    const lastValue = this.state.operator===1 ? this.state.first : this.state.second;
    
    switch(this.state.operator){
      case 1:
        this.setState({first:(lastValue*10)+value})
        break;
      case 2:
        this.setState({second:(lastValue*10)+value})
        break; 
      case 4:
        this.setState({second:(lastValue*1)+value})
        break;
              
    }
  }

  picOperation = (isSum) =>{
    this.setState({operator:2,isSum})
  }

  exeOperator = () =>{
    this.setState({operator:3})
  }

  picMult = (isM) =>{
    this.setState({operator:4, isM})
  } 
 

  clear = () =>{
    this.setState(this.initialState);
  }

  render(){
    const {operator} = this.state;
    return(
      <div className={'calculator'}>
        <div>
          <Display value={this.getValue()}/>
        </div>
        <div className={'buttonsContainer'}> 
          <Button display={'1'} onClick={()=> this.putValue(1)} disabled={operator===3}/>
          <Button display={'2'} onClick={()=> this.putValue(2)} disabled={operator===3}/>
          <Button display={'3'} onClick={()=> this.putValue(3)} disabled={operator===3}/>
          <Button display={'4'} onClick={()=> this.putValue(4)} disabled={operator===3}/>
          <Button display={'5'} onClick={()=> this.putValue(5)} disabled={operator===3}/>
          <Button display={'6'} onClick={()=> this.putValue(6)} disabled={operator===3}/>
          <Button display={'7'} onClick={()=> this.putValue(7)} disabled={operator===3}/>
          <Button display={'8'} onClick={()=> this.putValue(8)} disabled={operator===3}/>
          <Button display={'9'} onClick={()=> this.putValue(9)} disabled={operator===3}/>
          <Button display={'0'} onClick={()=> this.putValue(0)} disabled={operator===3}/>
          <Button display={'+'} onClick={()=> this.picOperation(true)} disabled={operator!==1}/>
          <Button display={'-'} onClick={()=> this.picOperation(false)} disabled={operator!==1}/>
          <Button display={'*'} onClick={()=> this.picMult(true)} disabled={operator!==1}/>
          <Button display={'/'} onClick={()=> this.picMult(false)} disabled={operator!==1}/>
          <Button display={'='} onClick={()=> this.exeOperator()} disabled={operator===1}/>
          <Button display={'C'} onClick={()=> this.clear()}/>
        </div>
      </div>
    )
  }
}

export default Calculator;