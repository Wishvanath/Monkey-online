import React, { Component } from 'react'
import './App.css'
import MonkeyList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export default class App extends Component {
  // define constructor
  constructor(){
    super();
    this.state = {


      // monekey list arrary
      monkeys: [],
      searchField: ''

    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({monkeys: data}))
  }





  // render main component
  render() {
    // destructoring the state variable
    const {monkeys , searchField} = this.state;
    // flilteration of monkey on set the state
    const filteredMonkey = monkeys.filter(monkey => 
      monkey.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">

        <h1>Monkey List</h1>
        {/* <input  type ="search" placeholder ="search Monkey" onChange={(e) => {
          // console.log(e.target.value);
          this.setState({searchField: e.target.value})
        }}/> */}

        <SearchBox 
        
        placeholder ="search Monkey"
        handleChange = {(e) => {
          this.setState({searchField: e.target.value})}}
        
        />


        {/* {JSON.stringify(searchField)} */}
        <MonkeyList data ={filteredMonkey}> 
           {/* {this.state.monkey.map((monkey_data) =>(
            <h2 key={monkey_data.id}>{monkey_data.name}</h2>
           ))} */}
        </MonkeyList>

        {/* show all the monkey list below */}
        {/* {this.state.monkey.map((monkey_data) =>(
          <h1 key={monkey_data.id}>{monkey_data.name}</h1>
        ))} */}

        {/* <MonkeyList name = {this.state.monkey}/> */}

      </div>
    )
  }
}
