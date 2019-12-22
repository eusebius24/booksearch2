import React from 'react';


class BookDisplay extends React.Component{
  constructor() {
    super();
    this.state = {
      booksData: {}
    }
  }

  componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?";
    const query = `${this.props.searchTerm}`;
    const key = 'AIzaSyCxOUJ6Oc-xrLVqbiDrDXZAFaWc5J7gCbg';
    const searchURL = url + "q=" + query + "&key=" + key;
    const options ={
        method: 'GET'
        };
    fetch(searchURL, options)
        .then(response => {
          if(!response.ok) {
            throw new Error("Something went wrong, please try again later.")
          }
          return response;
        })
        .then(response => response.json())
        .then(data => {
            // console.log(responseJson);
            console.log(data, data.items[0].volumeInfo.title);
           
          this.setState({
              booksData: data
            });
        console.log("booksData:", this.state.booksData.items[0]);
        const bookCards = this.state.booksData.items.map(function(book) {
          return(<div className="bookDisplay" key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Author: {book.volumeInfo.authors}</p>
            <p>Price/For Sale: {!book.saleInfo.listPrice ? '' : book.saleInfo.listPrice.amount}</p>
          </div>);
           
        });
        this.setState({
          bookCards: bookCards
        })
        })
       
        .catch(err => {
          console.log(err.message);
        });
  }
    
    render() {
       
   
        return (
          <div>{this.state.bookCards === null ? '' : this.state.bookCards}</div>
        
        );
    
        }
}

export default BookDisplay;