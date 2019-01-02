/*

1. Create an input field (in App component) with a change listener which outputs the length of the entered text 
below it (e.g. in a paragraph)    DONE

2. Create a new component (=> ValidationComponent) which receives the text length as a prop.    DONE

3.Inside the ValidationComponent, either output "Text too short" or "Text long enough " depending on the text
length (e.g. take 5 as minimum length)     DONE

4. Create another component (=> CharComponent) and style it as an inline box (=>display: inline-block,
   padding: 16px, text-align: center, margin: 16px,border: 1px solid block). DONE
   
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in
  the initial input field) as a prop.

6. When you click a CharComponent, it should be remvoed from the entered text.

*/

import React, { Component } from 'react';
import './App.css';
import Options from './Options/Options';
import ValidationComponent from './ValidationComponent/ValidationCompontent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component { 
  state={
    persons: [
      { name: ' Coolboy55 '},
      { name: ' ThatGuy '},
      { name: ' Troll '},
      { name: 'Coolboy55 '}
    ],
    counter: '',
    content: '', // this.state.content can't be null since we are using 0 in the ternary function in the render porition
    arrayOfCharactersOfTheContentString: []
    
  };
  

  txtAreaValue = (event) => {const txtAreaCharacterCount = event.target.value.length
      this.setState({ persons: [ { name: "Coolboy55 " } ], counter: txtAreaCharacterCount, content: event.target.value,
      arrayOfCharactersOfTheContentString: event.target.value.split('')  } )
  };

  switchNameHandler = () => {
    console.log(' switchNameHandler was clicked!');
    this.setState({ persons: [ { name: "we just changed the state of this app when you click the button  " } ],});
    this.renderEachCharacterInArray();
    };

  render() {
    // Javascript must be placed here BEFORE THE RETURN
    const charList = this.state.arrayOfCharactersOfTheContentString.map(char =>{
      return <CharComponent character = {char}/>;})

    const { persons,counter } = this.state; // get in the habbit of doing this here so you don't have to write for ex: this.state.persons

    return (
      <div className="App App-header">
        <p><button onClick={this.switchNameHandler}>Switch Name Handler</button></p>
        <h1>Hi this is a React App</h1>
        <Options word = { persons[0].name } price = "$20, a box of pizza and moutian dew">Text between Options's element tags are called children</Options>
        <textarea type="value" className="input" onChange= { this.txtAreaValue } placeholder="Insert your thoughts about anything here"></textarea>  
        
        <br/>

        {counter}
        
        { 
          this.state.content.length > 0 ? 
            <div>
              <ul>
              <CharComponent list= { this.arrayOfCharactersOfTheContentString } callBack = {this.renderEachCharacterInArray} />
              </ul>
            </div> : null
        }

        <div>
          <ValidationComponent count = { counter }></ValidationComponent>
        </div> 
        
          {charList}
        
      
        
      </div>
    );
  }
}

export default App;
