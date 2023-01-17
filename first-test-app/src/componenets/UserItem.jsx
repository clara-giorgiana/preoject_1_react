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

  handleDelete =  (id) => {

    console.log("id: " + id);
    this.props.onUserDeleted (id);
  
  }

  render(){
    
    const{id, firstname, lastname , email, salary, image} = this.props;

  return (
    <div className={styles['container']}> 
    <img src={image} className={styles['userImg']}/>
    <div className={styles['top-right']}>
    <button onClick={() => this.handleDelete(id)} className={styles['button-del']}> <img src={DeleteImg} className={styles["img-button"]} /> 

    </button>
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

}

export default UserItem;
