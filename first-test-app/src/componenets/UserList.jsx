import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";

class UserList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  onDeleteUser = (id2) => {
    console.log("user deleted " + id2);
    this.props.onUserDeleted(id2);
  };

  render() {
    const { users, showAll } = this.props;

    return (
      <div className={styles["userGalery"]}>
        <Fragment>
          {users.map((user) => (
            <UserItem
              key = {user.id}
              id={user.id}
              firstname={user.first_name}
              lastname={user.last_name}
              email={user.email}
              salary={user.salary}
              image={user.avatar}
              onUserDeleted={(id) => this.onDeleteUser(id)}
            ></UserItem>
          ))}
        </Fragment>
      </div>
    );
  }
}

export default UserList;
