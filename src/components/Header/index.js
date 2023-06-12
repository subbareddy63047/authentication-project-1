import {Component} from 'react'

import './index.css'

import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-img"
        />
        <ul className="options-container">
          <div className="symbol">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="Home"
            />
            <Link to="/">
              <li className="options">Home</li>
            </Link>
          </div>

          <div className="symbol">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="Home"
            />
            <Link to="/products">
              <li className="options">Products</li>
            </Link>
          </div>

          <div className="symbol">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="Home"
            />
            <Link to="/cart">
              <li className="options">Cart</li>
            </Link>
          </div>

          <button type="button" className="logout-button">
            Logout
          </button>
        </ul>
      </div>
    )
  }
}
export default Header
