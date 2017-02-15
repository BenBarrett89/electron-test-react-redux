import React, { Component, PropTypes } from 'react'

export default class Instrument extends Component {
  static propTypes = {
    setFrets: PropTypes.func.isRequired,
    setStrings: PropTypes.func.isRequired
  }

  set () {
    const frets = this.refs.fret.value
    const strings = this.refs.strings.value
    this.props.setFrets(frets)
    this.props.setStrings(strings)
  }

  render () {
    return (
      <div>
        <h2>Instrument</h2>
        <label>Frets:
          <select ref="fret">
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>
        </label>
        <label>Strings:
          <select ref="strings">
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </label>
        <button onClick={::this.set}>Submit</button>
      </div>
    )
  }
}
