// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {itemDetails} = this.props
    const {id, suggestion} = itemDetails
    return (
      <li>
        <div className="Item-cont">
          <p>{suggestion}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </div>
      </li>
    )
  }
}
export default SuggestionItem