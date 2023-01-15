
import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import ItemPost from "./ItemPost";
import styles from './PostList.module.css';

class PostList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }  
  
  render() {
    const {posts, showAll} = this.props;

    return (

      <div className={styles['postGalery']}>
      <Fragment>
        {posts.map( posts => <ItemPost title={posts.title}  body={posts.body} ></ItemPost>)}


      </Fragment>
      </div>
    );
  }
}

export default PostList;
