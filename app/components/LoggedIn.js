import React, { Component } from 'react'
import NavLink from './NavLink'

export default class LoggedIn extends Component {
  render () {
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <NavLink to='instrument'>Instrument Page</NavLink>
      </div>
    )
  }
}
