
import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import UserItem from "./UserItem";
import styles from './UserList.module.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }  
  
  onDeleteUser = (id2) => {
    console.log("user deleted " + id2);
    this.props.onUserDeleted (id2);
  
  }

  render() {
    const {users, showAll} = this.props;

    return (
      //Option 1
      // <div>
      //   <h1>Lista utilizatori</h1>
      //   <UserItem name="Test name" email="Test email" a={2} b={3} />

      //   <UserItem name="Test name 2 " email="Test email 2" a={2} b={10} />
      // </div>

      //Option2
      <div className={styles['userGalery']}>
      <Fragment>
        {users.map( user => <UserItem id={user.id} firstname={user.first_name}   lastname={user.last_name} email={user.email}  salary = {user.salary}  image = {user.avatar}
        onUserDeleted={(id) => this.onDeleteUser(id)}></UserItem>)}


      </Fragment>
      </div>
    );
  }
}

export default UserList;
