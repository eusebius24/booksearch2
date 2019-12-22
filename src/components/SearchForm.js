import React from 'react';

class SearchForm extends React.Component {
   constructor(props) {
       super(props);
   }

   
    
    render() {
        return(
            <form>
            <div className = 'searchBox'>
                <label htmlFor='SearchTerm'>Search: </label>
                <input type="text" name='SearchTerm' id='SearchTerm'  />
                <button type='button' onClick = {this.props.handleInputChange}>Search</button>
            </div>
             <div className = 'selectors'>
                <label htmlFor='PrintType'>Print Type: </label>
                <select id="PrintType" name="PrintType">
                    <option value="None">Select one...</option>
                    <option value="Book">Print Book</option>
                    <option value="Magazine">Magazine</option>
                   
                </select>
                <label htmlFor='BookType'>Book Type: </label>
                <select id="BookType" name="BookType">
                    <option value="None">Select one...</option>
                    <option value="Ebook">Ebook available</option>
                </select>
         </div>         
    </form>
        );
    }
    
}

export default SearchForm;