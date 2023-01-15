import "./Posts.module.css";
import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom';
import PostList from "./PostList";

//npm start

  class Posts extends React.Component {

  //by default the constructor is called automatically, but we need to do this when we add out states, etc.
  constructor() {
    super();
    this.state = {
      color: "pink",
      textColor: "black",
      counter: 0,
      isReady : false,
      posts: 
        [
          {
            title: "",
            body : ""
        }

        ]
      
  }
}

componentWillMount() {

  this.setState({ isReady: false });

    this.fetchPosts();
    
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 600);

console.log("post(0): " + this.state.posts[0].title);


}

fetchPosts = () => {
  
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => this.setState({ posts: data })) //taking data from HTTP call
    .catch((err) => console.log(err));
}


  render() {
    if (!this.state.isReady) {return null};
    return (
      <div className="App" style={{ backgroundColor: this.state.color, color: this.state.textColor }}>
                 <div className="buttons"> 
                 
            
                    <button  className="users-button"> <Link to='/'>Utilizatori</Link> </button>
                    <button  className="users-button"> <Link to='/Posts'>Postari</Link> </button>
                  </div> 
        <br />
                  <div className="posts"> 
                  <PostList posts={this.state.posts} showAll={true}></PostList>
                  </div> 
        <br />

        <br />
        <br />



      </div>
    );
  }
}



export default Posts;
