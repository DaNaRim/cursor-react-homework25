import React, {Component} from "react"
import styled from "styled-components"
import Header from "./Header"

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HomePageWrapper>
          <img src={require("../assets/img/homeImg.jpg")} alt="Зображення"/>
          <h1>Текст</h1>
        </HomePageWrapper>
      </div>
    )
  }
}

export default HomePage

const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 50%;
  }
`