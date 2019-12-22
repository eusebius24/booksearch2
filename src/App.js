import React from 'react';
import henry from './henry1.jpeg';
import './App.css';
import SearchForm from './components/SearchForm';
import BookDisplay from './components/BookDisplay';
// import booksData from './components/booksData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      booksData: {},
      searchTerm: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  bookSearch(event) {
    event.preventDefault();
    console.log("You clicked the search button!");
    
        
              
}
handleInputChange(event) {
  event.preventDefault();
  const searchBox = document.querySelector("#SearchTerm");
  const searchTerm = searchBox.value.toLowerCase();
  this.setState({
    searchTerm: searchTerm
  });
  console.log('searchTerm:', this.state.searchTerm);
  searchBox.value = '';
}



  render() {
    if(this.state.searchTerm) {
      const books = {...this.state.booksData.items};
      console.log("books:", books);
    
    }
   
    // const bookDisplayComponents = books.map((book) => {
    //   return <BookDisplay key = {book.id} book = {book} />
    // })
    return (
      <main className='App'>
        <header>
            <h1>Google Book Search</h1>
        </header>
        <SearchForm  handleInputChange = {this.handleInputChange} />
        {this.state.searchTerm ?
        <BookDisplay searchTerm = {this.state.searchTerm} />
        : ''}
      </main>
    );
  }
  
}

export default App;