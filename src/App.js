import {BrowserRouter, Route} from "react-router-dom"
import {createGlobalStyle} from "styled-components"
import "./App.css"
import ContactPage from "./components/ContactPage"
import ContactsPage from "./components/Contracts"
import HomePage from "./components/HomePage"
import ImagePage from "./components/ImagePage"
import PostsPage from "./components/PostsPage"

function App() {
  return (
    <main>
      <GlobalStyle/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={HomePage}/>
        <Route path="/posts" exact component={PostsPage}/>
        <Route path="/images" exact component={ImagePage}/>
        <Route path="/contacts" exact component={ContactsPage}/>
        <Route path="/contacts/:username" exact component={ContactPage}/>
      </BrowserRouter>
    </main>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    min-height: 100vh;
    height: 100vh;
  }

  #root {
    min-height: inherit;
  }
`
