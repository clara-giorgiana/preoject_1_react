import styles from './UserItem.module.css';
import DeleteImg from './assets/images/delete.png';
import React from "react";
import { Component } from "react";

class UserItem extends Component {
  
  currentState;

  constructor(props) {
    super(props);
    this.state = {
      propState: [{
        id: 0
      }
    ],
    };
    
  }

  handleDelete =  (e) => {

    console.log("detail: " + e);
    console.log("detail: " + e.detail.valueOf());
    //TODO: no working 
    // this.props.onUserDeleted (e);
  
  }

  render(){
    
    const{id, firstname, lastname , email, salary, image} = this.props;

  return (
    <div className={styles['container']}> 
    <img src={image} className={styles['userImg']}/>
    <div className={styles['top-right']}>
    <button onClick={(e) => { this.handleDelete(e)}} className={styles['button-del']}> <img src={DeleteImg} className={styles["img-button"]} /> {this.renderIcon({id})} </button>
      </div>
     <div className={styles['bottom-left']}>
        {firstname +" "+ lastname}
        <br/>{email}
          <br/>Salary: {salary} 
      </div>
      <br/><br/>
  </div>

  );
  }

  renderIcon = (id2) => {
    // var currentState = this.state.propState;
    // var newState = currentState[0];
    // // newState.id = id2;
    // this.state.propState = [...currentState, newState]
    // // this.setState ( [...currentState, newState]);
    // console.log(this.state.propState.length);
    console.log(id2);
    
  }
}

export default UserItem;
