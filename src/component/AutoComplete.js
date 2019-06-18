import React, {Component} from 'react';
import './AutoComplete.css'

class AutoComplete extends  Component {
    state = {
        suggestions: [],
        text: ''
    }

    onTextChanged = (e) => {
        const {items} = this.props
    const {value} = e.target;
    let suggestions = [];
    if(value.length > 0){
        const regex  = new RegExp(`^${value}`, 'i')
        suggestions = items.sort().filter(item => regex.test(item))
    }
    this.setState({
        suggestions,
        text:value
    })
   }
   suggestionSelected = (value) => {
    this.setState(() => ({
        text:  value,
        suggestions: []
    }))
}
   renderedSuggestion = () => {
       const {suggestions} =this.state;
       if(suggestions.length === 0){
           return null;
       }else{
        return (
            <ul>{suggestions.map(item => <li onClick={this.suggestionSelected.bind(this, item)}>{item}</li>)}</ul>
           )
       }
   }
    
    render(){
        const {text} = this.state
        return(
            <div className="AutoComplete">
                <input type="text"  value={text} onChange={this.onTextChanged}/>
                    {this.renderedSuggestion()}
            </div>
        )
    }
}
export default AutoComplete;