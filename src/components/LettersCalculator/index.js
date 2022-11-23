// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInputLength: 0}

  onchangeInput = event => {
    this.setState({searchInputLength: event.target.value.length})
  }

  render() {
    const {searchInputLength} = this.state

    return (
      <div className="app-container">
        <div>
          <h1 className="heading">
            Calculate the <br />
            letters you <br />
            enter
          </h1>
          <label htmlFor="input" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="input"
            placeholder="Enter the Phrase"
            onChange={this.onchangeInput}
          />
          <p className="count-container">No.of letters: {searchInputLength}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
