import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5],

    sortedData: [1,
      2,3,5,6,6,6,7,7,9,9,11,13,13,13,14,14,15,16,16,17,21,22,23,24,25,25,26,26,27,27,27,28,28,28,30,31,32,32,33,34,38,38,39,40,40,42,42,43,44,45,46,46,46,48,49,50,51,51,53,53,54,55,56,62,63,64,64,64,65,67,68,69,69,70,70,72,72,73,73,76,78,78,80,81,82,83,84,85,87,87,88,88,89,90,91,93,97,98,98],

      results: null,

      inputValue: ''
  }

  linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i +1;
        }
    }
    return -1;
};

binarySearch(array, value, start, end, count = 1) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length -1: end;
  console.log('index', start, end)
  console.log(array[start], array[end])
  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(item);
  if (item === value) {
      return count;
  }
  else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, count + 1);
  }
  else if (item > value) {
      return this.binarySearch(array, value, start, index - 1, count + 1);
  }
};

clickLinear = (e) => {
  e.preventDefault();
  let results = this.linearSearch(this.state.data, Number(this.state.inputValue));
  this.setState({results})
}

clickBinary = (e) => {
  e.preventDefault();
  let results = this.binarySearch(this.state.sortedData, Number(this.state.inputValue))
  this.setState({results});
}

updateInputValue = (evt) => { this.setState({ inputValue: evt.target.value }); }

  render() {
    return (
      <div className="App">
        <form>
          <input type="number" id="input" value={this.state.inputValue} onChange={this.updateInputValue}></input>
          <button onClick={(e)=> {this.clickLinear(e)}}>Linear Search</button>
          <button onClick={(e)=> {this.clickBinary(e)}}>Binary Search</button>
        </form>
        <p>
          number of tries: {this.state.results}
        </p>
      </div>
    );
  }
}

export default App;
