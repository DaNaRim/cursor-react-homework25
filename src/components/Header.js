import React, {Component} from "react"

import styled from "styled-components"
import Nav from "./Nav"

class Header extends Component {
  render() {
    return (
      <HeaderWrapper className="header">
        <Nav/>
      </HeaderWrapper>
    )
  }
}

export default Header

const HeaderWrapper = styled.div`
  padding: 1rem 0;
  background-color: blue;
`