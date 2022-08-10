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
            <img src="https://source.unsplash.com/random/600x600?water"/>
            <img src="https://source.unsplash.com/random/600x600?summer"/>
            <img src="https://source.unsplash.com/random/600x600?plants"/>
            <img src="https://source.unsplash.com/random/600x600?snow"/>
            <img src="https://source.unsplash.com/random/600x600?roses"/>
            <img src="https://source.unsplash.com/random/600x600?sky"/>
            <img src="https://source.unsplash.com/random/600x600?nature"/>
            <img src="https://source.unsplash.com/random/600x600?blossom"/>
            <img src="https://source.unsplash.com/random/600x600?ice"/>
            <img src="https://source.unsplash.com/random/600x600?spring"/>
          </div>
        </ImageWrapper>
      </div>
    )
  }
}

export default ImagePage

const ImageWrapper = styled.div`
  height: 100vh;
  font-size: 16px;
  line-height: 1.5;
  font-family: Trebuchet MS, Helvetica, Arial, sans-serif;

  overflow: hidden;
  background-color: #222;
  background-image: linear-gradient(to right, rgba(255, 255, 255, .025) 10%, transparent 0),
                    linear-gradient(#222, #000);
  background-size: .75em 100%, 100% 100%;
  background-attachment: fixed;
  display: flex;
  align-items: center;


  .img_wrapper {
    position: relative;
    flex-grow: 1;
    margin: 3rem auto 0;
    max-width: 1200px;
    max-height: 1200px;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
    justify-items: center;
    align-items: center;

    img {
      z-index: 1;
      grid-column: span 2;
      max-width: 100%;
      margin-bottom: -52%;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      transform: scale(1);
      transition: all .25s;

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
