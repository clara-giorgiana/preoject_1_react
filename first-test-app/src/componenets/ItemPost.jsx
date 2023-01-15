import styles from './ItemPost.module.css';
import React from "react";
import { Component } from "react";

class ItemPost extends Component {
  
  currentState;

  constructor(props) {
    super(props);

  }

  render(){
    
    const{title, body} = this.props;

  return (

      <div className={styles['container']}> 
            <div className={styles['post-title']}>
      {title}
        </div>
      <br />
      <div className={styles['post-body']}>
      {body}
        </div>
      
      </div>

  );
  }


}


export default ItemPost;
