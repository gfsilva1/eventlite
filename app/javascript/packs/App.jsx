// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import styles from './App.module.scss'

const App = props => (
  <div>
    <Navbar />
    <Banner />
    <div className={styles.wrapper}>

    </div>
  </div>

)

App.defaultProps = {
  name: 'David'
}

App.propTypes = {
  name: PropTypes.string
}
