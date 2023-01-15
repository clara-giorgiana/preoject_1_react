import styles from "./UserForm.module.css";
import { Component } from "react";
import NewUserImage from './assets/images/newUserImage.png';


class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      first_name: "",
      last_name: "",
      email: "",
      isVIP: false,
      salary: "",
      image: "",
      inputIsCorrect: false,
      error: ""
    };
  }

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  };

  handlSalaryChange = (e) => {
    const salary = e.target.value;
    console.log("handlSalaryChange " + salary);
    this.setState({ salary });
  };

  checkInput = () => {
    const fName = this.state.name.split(" ")[0];
    const lName = this.state.name.split(" ")[1];

    
    console.log("fNamee: " + fName);
    
    console.log("lName: " + lName);
    console.log("this.state.email.split().length: " + this.state.email.split().length);
    console.log("this.state.email.includes: " + this.state.email.includes('.'));
    
    if(fName.length === 0){
      this.state.inputIsCorrect= false;
      const error = "Adaugati numele utilizatorului!";
      this.setState({ error });
      return;
    }else if(lName === undefined){
      this.state.inputIsCorrect= false;
      const error = "Adaugati prenumele utilizatorului!";
      this.setState({ error });
      return;
    }

    if(this.state.email.includes("@")){
      if (this.state.email.split("@").length > 2){
        this.state.inputIsCorrect= false;
        const error = "Adresa de email este invalida!";
        this.setState({ error });
        return;
      }

      if(!this.state.email.includes(".")){
        this.state.inputIsCorrect= false;
        const error = "Adresa de email este invalida!";
        this.setState({ error });
        return;
      }

      if(this.state.email.split("@")[1].length == 0){
        this.state.inputIsCorrect= false;
        const error = "Adresa de email este invalida!";
        this.setState({ error });
        return;
      }

      if(this.state.email.includes("@.")){
        this.state.inputIsCorrect= false;
        const error = "Adresa de email este invalida!";
        this.setState({ error });
        return;
      }

      if(this.state.email.includes(".@")){
        this.state.inputIsCorrect= false;
        const error = "Adresa de email este invalida!";
        this.setState({ error });
        return;
      }
    }else{
      this.state.inputIsCorrect= false;
      const error = "Adresa de email este invalida!";
      this.setState({ error });
      return;
    }
    this.state.inputIsCorrect= true;
    const error = "";
    this.setState({ error });

  };

  takeDataForNewUser = () => {
    const fName = this.state.name.split(" ")[0];
    const lName = this.state.name.split(" ")[1];

    const newUser = {
      name: this.state.name,
      first_name: fName,
      last_name : lName,
      email: this.state.email,
      avatar: NewUserImage,
      salary: "undeclared"
    }

    this.props.onUserCreated (newUser);


    this.setState( {id: 0, name: '', email:'', error:''});
    console.log(newUser);
  }


  handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    this.checkInput();
    if(this.state.inputIsCorrect){
      this.takeDataForNewUser();
    }
    console.log("this.state.error: " + this.state.error);

  }

  render() {
    return (
      //we need a start node but it is not mandatory to use div
      //we can use fragments when we don't have style over div
      //performance is increased - because it doesn't need to render unused tags
      <>
        <div className={styles["component-container"]}>
          <h1>Adauga utilizatori:</h1>
          <br />
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Nume si prenume:</label>
            <br />
            <input
              className={styles["form-line"]}
              type="text"
              placeholder="Numele si prenumele"
              onChange={(e) => this.handleNameChange(e)}
              value= {this.state.name}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              className={styles["form-line"]}
              type="text"
              placeholder="Adresa de email"
              onChange={(e) => this.handleEmailChange(e)}
              value= {this.state.email}
            />
            <br />
            <label className={styles["error-label"]}>{this.state.error}</label>
            <br />
            <input type="submit" className={styles["submit-button"]} />
          </form>
        </div>
      </>
    );
  }
}

export default UserForm;
