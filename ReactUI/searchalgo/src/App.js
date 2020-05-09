import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    linearSearches: 0,
    notFound: false,
    binarySearches: 0,
    binaryNotFound: false,
    found: false
  }

  linearSearch = (e) => {
    e.preventDefault()

    this.setState({
      notFound: false
    })

    const target = e.target
    const arrayString = target.array.value
    const array = arrayString.split(" ")
    const value = target.searchValue.value

    let searches = 0

    for (let i = 0; i < array.length; i++) {
      searches++
      if(array[i] == value){
        this.setState({
          found: true
        })
        break
      } else {
        this.setState({
          found: false
        })
      }
    }

    this.setState({
      linearSearches: searches
    })
  }

  binaryFind = (e) => {
    e.preventDefault()

    this.setState({
      binaryNotFound: false
    })

    const target = e.target
    const arrayString = target.array.value
    const array = arrayString.split(" ")
    const value = target.searchValue.value
    let arraySorted = array.sort(function(a,b) {return a-b})
    console.log(arraySorted)

    let searches = this.binarySearch(arraySorted, value) 
    this.setState({
      binarySearches: searches
    })

    if(isNaN(searches)) {
      this.setState({
        binarySearches: 7,
        binaryNotFound: true
      })
    }
  }

  binarySearch = (array, value, start, end) => {
    start = start === undefined ? 0  : start
    end = end === undefined ? array.length : end
    
    if(start > end) {
      return -1
    }

    const index = Math.floor((start + end) / 2)
    const item = array[index]

    console.log(item)

    if(parseInt(item) == parseInt(value)) {
      return 1
    }
    else if (parseInt(item) < parseInt(value)) {
      return 1 + this.binarySearch(array, value, index + 1, end)
    }
    else if(parseInt(item) > parseInt(value)) {
      return 1 + this.binarySearch(array, value, start, index - 1)
    }
  }

  render() {
    return (
      <>
        <h2>Linear Search</h2>
        <form onSubmit={this.linearSearch}>
          <label htmlFor="array">Input array of values:</label>
          <textarea id="array" name="array" rows="4" cols="50"></textarea>
          <label htmlFor="searchValue">Input value to search:</label>
          <input id="searchValue" name="value" type="text" />
          <button type="submit">Submit</button>

        </form>
        {this.state.linearSearches > 0 && this.state.found === true &&
          <h3>Element found after {this.state.linearSearches} searches</h3>
        }
        {this.state.linearSearches > 0 && this.state.found === false &&
          <h3>Element NOT found after {this.state.linearSearches} searches</h3>
        }

        <h2>Binary Search</h2>
        <form onSubmit={this.binaryFind}>
          <label htmlFor="array">Input array of values:</label>
          <textarea id="array" name="array" rows="4" cols="50"></textarea>
          <label htmlFor="searchValue">Input value to search:</label>
          <input id="searchValue" name="value" type="text" />
          <button type="submit">Submit</button>
        </form>
        {this.state.binarySearches > 0 && this.state.binaryNotFound === false &&
          <h3>Element found after {this.state.binarySearches} searches</h3>
        }
        {this.state.binarySearches > 0 && this.state.binaryNotFound === true &&
          <h3>Element NOT found after {this.state.binarySearches} searches</h3>
        }
      </>
    )
  }
}

export default App;
