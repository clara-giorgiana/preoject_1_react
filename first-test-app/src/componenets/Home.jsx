import "./Home.css";
import UserList from "./UserList";
import UserForm from "./UserForm";
import Posts from "./Posts";
import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom';


class Home extends Component {
  // class Home extends React.Component {

  //by default the constructor is called automatically, but we need to do this when we add out states, etc.
  constructor() {
    super();
    this.state = {
      color: "pink",
      textColor: "black",
      counter: 0,
      isReady : false,
      showCounter: true,
      users: [
        {
          id: 0,
          first_name: "Garnet",
          last_name: "Beatty",
          email: "jennie.nichols@example.com",
          salary: 1,
          avatar: "https://randomuser.me/api/portraits/men/75.jpg"
        }
      ]
    };

    this.applyColorBg = this.applyColorBg.bind(this); 
    this.applyColorText = this.applyColorText.bind(this); 
  }

  applyColorBg(e) {
    console.log(e.target.value);
    const newColor = e.target.value;
    this.setState({ color: newColor });
  }

  applyColorText(e) {
    console.log(e.target.value);
    const newColor = e.target.value;
    this.setState({ textColor: newColor });
  }

  increment = () => {
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
    console.log(this.state.counter);
  };

  componentWillMount() {

    this.setState({ isReady: false });

      this.fetchUsers();
      setTimeout(() => {
        this.addSalary();
      },1900); 
      
      setTimeout(() => {
        this.setState({ isReady: true });
      }, 1920);




  }

  fetchUsers = () => {
    
    // fetch("https://fakerapi.it/api/v1/persons")
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data.data })) //taking data from HTTP call
      .catch((err) => console.log(err));
  }


  addSalary = () => {
    var newUsers = this.state.users;
    // var newPics = this.state.photos.results;
    console.log("length: " + newUsers.length)
    for (var i = 0; i< newUsers.length ; i++){
      var randomSalary = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
      newUsers[i].salary = "$" +  randomSalary;
      newUsers[i].id = i;
    }
    this.setState({ users: newUsers });
  }

  addPhotos = () => {

    var newUsers = this.state.users;

    for (var i = 0; i< newUsers.length ; i++){
      var pic = this.state.photos[i];
      newUsers[i].photo = pic.url + ".jpg";
      newUsers[i].title = pic.title;
    }
    this.setState({ users: newUsers });

    console.log("photo: " + this.state.users[0].photo);
  }

  addnewUser = (user) => {
    const oldUsers = this.state.users;
    const ids = oldUsers.map(user => user.id);
    const newId = Math.max(...ids) + 1;
    user.id =newId;
    const newUsers = [... oldUsers, user];
    this.setState({users: newUsers});
  };




  deleteUser = (inputID) => {
    console.log("inputID: " + inputID);
    // const testID = 0;
    const testID  = inputID;
    console.log("inputID1: " + inputID);
    console.log("length: " + this.state.users.length);

    const user = this.state.users[0];
    console.log("user: " + user.id);
    const newUsers = this.state.users.filter(function(user) { return user.id !== testID });
    console.log("newUsers: " + newUsers[0].id);

    this.setState({users: newUsers});

  console.log("length: " + this.state.users.length);

  };

  render() {
    if (!this.state.isReady) {return null};
    return (
      <div className="App" style={{ backgroundColor: this.state.color, color: this.state.textColor }}>
                 <div className="buttons"> 
                 
            
                    <button  className="users-button"> <Link to='/'>Utilizatori</Link> </button>
                    <button  className="users-button"> <Link to='/Posts'>Postari</Link> </button>
                  </div> 
        <br />

        <br />
        <br />

        <br />
        <UserList users={this.state.users} showAll={true} onUserDeleted={(id) => this.deleteUser(id)}/>

        <div class="bottom">
        <br />
        <UserForm onUserCreated={(user) => this.addnewUser(user)} />
        <br />
          <h3>Schimba culoarea fundalului: </h3>
          <input type="color" onChange={(e) => this.applyColorBg(e)} />
          <br /><br />
          <h3>Schimba culoarea textului: </h3>
          <input type="color" onChange={(e) => this.applyColorText(e)} />
          <br /><br />
          {/* <Parent /> */}
          <br /><br /><br /><br />
        </div>


      </div>
    );
  }
}


export default Home;
