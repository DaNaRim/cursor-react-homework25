import React, {Component} from "react"
import {NavLink} from "react-router-dom"

import styled from "styled-components"

class Nav extends Component {
  render() {
    const path = window.location.pathname

    return (
      <NavWrapper>
        <ul>
          <li className={path === "/" ? "selected" : null}><NavLink to="/">Home</NavLink></li>
          <li className={path === "/posts" ? "selected" : null}><NavLink to="/posts">Posts</NavLink></li>
          <li className={path === "/images" ? "selected" : null}><NavLink to="/images">Images</NavLink></li>
          <li className={path === "/contacts" ? "selected" : null}><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
      </NavWrapper>
    )
  }
}

export default Nav

const NavWrapper = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;

    li {
      margin: 0 0.5rem;

      &.selected > a {
        text-decoration: underline;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
      }
    }
  }
`