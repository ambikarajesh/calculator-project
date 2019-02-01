import React, { Component } from 'react';
import style from './Calculator.module.css';
import Board from '../../Component/Board/Board';
import Buttons from '../../Component/Buttons/Buttons';
import MutateBtn from '../../Component/Buttons/MutateBtn/MutateBtn';

class App extends Component {
    
  state ={
      Keys:['7','8','9','/','4','5','6','*','3','2','1','-','0','.','=','+'],
      Mathexp:'',
      Result:'0.'
    }

  addChar = (Key) => {
    let exp = this.state.Mathexp;
    let newExp = exp+Key;
    if(Key !== '=') {
      if(exp === ""){
        this.setState({Mathexp:Key});
      }else{
        this.setState({Mathexp:newExp})
      }
    }else{
      try{
        let value = eval(exp);
        this.setState({Result:value});
      }
      catch(error){
        this.setState({Result:'ERROR'})
      }
    }     
  }
  clearChar = () => {
    this.setState({Mathexp:'', Result:'0.'})
  }

  deleteChar = () => {
    let exp = this.state.Mathexp;
    exp = exp.slice(0,-1);
    this.setState({Mathexp:exp})
  }

   render() {
    let numbersButton = <Buttons Keys = {this.state.Keys} click = {this.addChar}/>;
    return (
      <div className={style.App}>
          <h2>Basic Calculator</h2>
          <div>
              <Board Mathexp = {this.state.Mathexp} Result = {this.state.Result}/>
              <MutateBtn clickClear = {this.clearChar} clickDelete = {this.deleteChar}/>              
              {numbersButton}
          </div>
         
       </div>   
    );
  }
}

export default App;
