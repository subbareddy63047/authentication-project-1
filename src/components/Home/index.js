// Write your JS code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="content-container">
          <div className="first-container">
            <h1 className="heading">Clothes That Get YOU Noticed</h1>
            <p className="para">
              Fashion is part of the daily air and it does not quite help that
              it change all time.Clothes have always been market of the era and
              we are in revolution.Your fashion make you been seen and heard
              that way you are.So celebrate the session new and exciting fashion
              in your own way.
            </p>
            <button type="button" className="home-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            alt="clothes that get you noticed"
            className="second-container"
          />
        </div>
      </div>
    )
  }
}
export default Home
