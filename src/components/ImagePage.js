import React, {Component} from "react"

import styled from "styled-components"
import Header from "./Header"

class ImagePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ImageWrapper>
          <div className="img_wrapper">
            <img src="https://source.unsplash.com/random/600x600?water" alt="water"/>
            <img src="https://source.unsplash.com/random/600x600?summer" alt="summer"/>
            <img src="https://source.unsplash.com/random/600x600?plants" alt="plants"/>
            <img src="https://source.unsplash.com/random/600x600?snow" alt="snow"/>
            <img src="https://source.unsplash.com/random/600x600?roses" alt="roses"/>
            <img src="https://source.unsplash.com/random/600x600?sky" alt="sky"/>
            <img src="https://source.unsplash.com/random/600x600?nature" alt="nature"/>
            <img src="https://source.unsplash.com/random/600x600?blossom" alt="blossom"/>
            <img src="https://source.unsplash.com/random/600x600?ice" alt="ice"/>
            <img src="https://source.unsplash.com/random/600x600?spring" alt="spring"/>
          </div>
        </ImageWrapper>
      </div>
    )
  }
}

export default ImagePage

const ImageWrapper = styled.div`
  font-family: Trebuchet MS, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 100vh;
  background-color: #222;
  background-image: linear-gradient(to right, rgba(255, 255, 255, .025) 10%, transparent 0),
                    linear-gradient(#222, #000);
  background-attachment: fixed;
  background-size: .75em 100%, 100% 100%;

  .img_wrapper {
    position: relative;
    display: grid;
    align-items: center;
    flex-grow: 1;
    max-width: 1200px;

    max-height: 1200px;
    margin: 3rem auto 0;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
    justify-items: center;

    img {
      z-index: 1;
      max-width: 100%;
      margin-bottom: -52%;
      transition: all .25s;
      transform: scale(1);
      grid-column: span 2;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

      &:nth-child(7n + 1) {
        grid-column: 2 / span 2;
      }

      &:hover {
        z-index: 2;
        transform: scale(1.3);
      }
    }
  }
`
