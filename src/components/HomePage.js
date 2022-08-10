import React, {Component} from "react"
import Header from "./Header"

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <img src={require("../assets/img/homeImg.jpg")} alt="Зображення" style={{maxWidth: "50%"}}/>
          <h1>Текст</h1>
        </div>
      </div>
    )
  }
}

export default HomePage
