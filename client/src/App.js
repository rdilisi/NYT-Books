import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount = () => {
    
  }

  searchinput = (event) => {
    this.setState({
      searchinput: event.target.value
    })
  }
  searchsubmit = (event) => {
    event.preventDefault()
    var that = this
    fetch("https://www.googleapis.com/books/v1/volumes?q="+ this.state.searchinput)
    .then(function(data){
      return data.json()
    })
    .then(function(data){
      var books = data.items.splice(0,20)
      that.setState({
        books:books
      })
    })
  }
  render() {
    var displayBooks = this.state.books.map((eachitem,index)=>
      <div key={index}>
        <h2>
          {eachitem.volumeInfo.title}
        </h2>

        <p>
          <strong>Author: {eachitem.volumeInfo.authors}</strong>
        </p>
        {/* <img src={eachitem.volumeInfo.imageLinks.thumbnail}></img> */}
          {/* {eachitem.volumeInfo.imageLinks.thumbnail} */}
      </div>
    )
    return (
      <div className="App">
      <div className= "header">
        <h1>NYT Google Book Search</h1>
        <form onSubmit={this.searchsubmit}>
          <input onChange={this.searchinput}></input>
          <button type="submit"> Search Here </button>
        </form>
        </div>
        {displayBooks}
      </div>
    );
  }
}

export default App;
