import React, {Component} from "react"
import {NavLink} from "react-router-dom"

import styled from "styled-components"

class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <ul>
          <li><NavLink to="/" exact={true}>Home</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/images">Images</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
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

      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;

        &.active {
          text-decoration: underline;
        }
      }
    }
  }
`