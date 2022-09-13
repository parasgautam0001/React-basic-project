import React from 'react'
import PropTypes from 'prop-types'
import zee from '../assets/zeelogo.png'
import {Link} from 'react-router-dom'

export default function Header(props) {
  let imstyle={
    width:"120px",
    height:"50px"
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.titlee}
            <img src={zee} alt="Zee Logo" caption="sfafa" style={imstyle}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/" style={{ textDecoration: 'none', color:'black'}}>Home</Link>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Trending
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    <Link to="/Trending" style={{ textDecoration: 'none', color:'black'}}>Movies</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <Link to="/Trending" style={{ textDecoration: 'none', color:'black'}}>Webseries</Link>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <Link to="/Trending" style={{ textDecoration: 'none', color:'black'}}>Anime</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <Link to="/Todos" style={{ textDecoration: 'none', color:'black'}}>Watchlist</Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Update</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  )
}

Header.defaultProps={
    titlee:"Default Title Zee"
}
Header.propTypes={
    titlee: PropTypes.string
}
