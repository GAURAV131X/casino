import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
import Popup from "./Popup";

class App extends React.Component {
  constructor() {
    super();
   
    this.state = {
      showPopup: false,
      slot1:"",
      slot2:"",
      slot3:"",
      balance: 0,
      currentTime:""
    };
  }
  cb = (s1, s2, s3) => {
    this.setState({ slot1: s1, slot2: s2, slot3: s3 });
    var bal = 0;

    if (s1 === 3 && s2 === 3 && s3 === 3) {
      bal = bal + 5;
    } else if (s1 === 7 && s2 === 7 && s3 === 7) {
      bal = bal + 10;
    }

    this.setState({ balance: bal });
    var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.setState({currentTime:time})
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand">Casino</span>

            {/* <span className="btn btn-outline-light" >Balance</span> */}
            <div class="d-flex">
              <span class="navbar-brand">Balance</span>
              <input
                class="form-control me-2"
                disabled="true"
                value={this.state.balance}
              />

              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="40"
                  height="40"
                  class="rounded-circle"
                />
              </a>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="py-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <span className="navbar-brand">Casino</span>

                {/* <span className="btn btn-outline-light" >Balance</span> */}
                <div class="d-flex">
                  <button
                    class="btn btn-outline-primary"
                    onClick={this.togglePopup.bind(this)}
                  >
                    Start
                  </button>
                </div>
              </div>
            </nav>

            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Slot 1</th>
                  <th scope="col">Slot 2</th>
                  <th scope="col">Slot 3</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
              <th scope="row">#</th>
              <td>{this.state.slot1}</td>
              <td>{this.state.slot2}</td>
              <td>{this.state.slot3}</td>
              <td>{ this.state.currentTime}</td>
                {/* {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.course}</td>
              <td>{user.email}</td>
              <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user._id}`}>
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/users/edit/${user._id}`}
                >
                  Edit
                </Link>
                <Link
                  class="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))} */}
              </tbody>
            </table>
          </div>
        </div>

        {this.state.showPopup ? (
          <Popup pcb={this.cb} closePopup={this.togglePopup.bind(this)} />
        ) : null}

        <div className="footer">copyright</div>
      </>
    );
  }
}

export default App;
