// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {suggestionsList: this.props, searchInput: ''}

  showoptions = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    console.log(typeof suggestionsList)
    return (
      <div className="bg-container">
        <img
          className="googleLogo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="input-container">
          <div>
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              value={searchInput}
              onClick={this.showoptions}
              className="input"
              placeholder="Search Google"
            />
          </div>
          <ul className="ul-cont">
            {suggestionsList.map(eachItem => (
              <SuggestionItem itemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
