import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './Banner.module.scss'
import passistas from '../assets/passistas.jpeg'

const Banner = props => (
  <div className={styles.banner}>
    <div style={{
                display: `flex`,
                alignItems: `center`,
                backgroundImage: `url(${passistas})`,
                backgroundSize: `cover`,
                height: `70vh`,
                }}>
      <div className={styles.disclaimer}>
        <h1>FEEL THE SENSATION OF</h1>
        <h1> <span>CABOCLINHO</span> ANYWHERE</h1>
        <p>Wide selection of RITUS with the best audio and visual quality</p>
        <button><a href="#">Join Now</a></button>
        <button><a href="#">Learn More</a></button>
      </div>
    </div>
  </div>
)

Banner.defaultProps = {
  name: 'David'
}

Banner.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Banner name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

export default Banner
