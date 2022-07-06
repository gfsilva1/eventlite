// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'
import logo from '../assets/ritu.png'
import lupa from '../assets/lupa_branca.jpg'
import brazil from '../assets/brazil.png'
import profile from '../assets/profile.png'


const Navbar = props => (
  <div className={styles.nav}>
    <img src={logo} alt="" />
    <h1>Learn</h1>
    <h1>Academy</h1>
    <h1>Movies</h1>
    <h1>About Us</h1>
    <img src={lupa} alt="" />
    <img src={brazil} alt="" />
    <img src={profile} alt="" />
  </div>
)

Navbar.defaultProps = {
  name: 'David'
}

Navbar.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Navbar name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

export default Navbar
