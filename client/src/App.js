import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    books: []
  }



  componentDidMount = () => {
    var that = this
    fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
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
      <div>
        <h2>
          {eachitem.volumeInfo.title}
        </h2>

        <p>
          <strong>Author: {eachitem.volumeInfo.authors}</strong>
        </p>
      </div>
    )
    return (
      <div className="App">
        <h1>NYT Google Book Search</h1>
        {displayBooks}
      </div>
    );
  }
}

export default App;
