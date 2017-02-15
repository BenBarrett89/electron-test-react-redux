import React, { Component, PropTypes } from 'react'

export default class Instrument extends Component {
  static propTypes = {
    openWindow: PropTypes.func.isRequired,
    setFrets: PropTypes.func.isRequired,
    setStrings: PropTypes.func.isRequired
  }

  openWindow () {
    this.props.openWindow()
  }

  setFrets () {
    this.props.setFrets(this.refs.fret.value)
  }

  setStrings () {
    this.props.setStrings(this.refs.strings.value)
  }

  render () {
    return (
      <div>
        <h2>Instrument</h2>
        <label>Frets:
          <select
            defaultValue={this.props.instrument.frets}
            onChange={::this.setFrets}
            ref="fret">
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>
        </label>
        <label>Strings:
          <select
            defaultValue={this.props.instrument.strings}
            onChange={::this.setStrings}
            ref="strings">
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </label>
        <button onClick={::this.openWindow}>Open Window</button>
        <p>Current Frets: {this.props.instrument.frets}</p>
        <p>Current Strings: {this.props.instrument.strings}</p>
      </div>
    )
  }
}
