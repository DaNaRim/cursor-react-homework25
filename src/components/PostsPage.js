import React, {Component} from "react"
import {posts} from "../data"
import Header from "./Header"
import Post from "./Post"

class PostsPage extends Component {
  render() {
    return (
      <div >
        <Header/>
        <div className="wrapper" style={{margin: "0 auto", width: "600px"}}>
          {posts.map(post => <Post key={post.id} data={post}/>)}
        </div>
      </div>
    )
  }
}

export default PostsPage
