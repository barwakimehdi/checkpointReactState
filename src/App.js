import React, { Component } from "react";
import PImg from "./mehdi_barwaki_profile.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      person: {
        fullName: "Mehdi Barwaki",
        bio: "Beginner FullStackJs Developer",
        imgSrc: { PImg },
        profession: "Web Developer",
        show: false,
      },
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ id: this.state.id + 1 })
      // }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleClick = () => {
    this.setState({
      id: 0,
      person: { ...this.state.person, show: !this.state.person.show },
    });
  };
  toggledButon = () => {
    return (
      <div className="btnToggled">
        {this.state.person.show ? (
          <div>
            <p className="conterStyle">{this.state.id} seconds since componentDidMount</p>
            <div className="card mx-auto" style={{ width: "20rem" }}>
              <img src={PImg} className="card-img-top" alt="Mehdi_Barwaki" />
              <div className="card-body">
                <h3 className="card-title">{this.state.person.fullName}</h3>
                <h5 className="card-title">{this.state.person.profession}</h5>
                <p className="card-text">{this.state.person.bio}</p>
              </div>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="App App-header ">
        <button
          onClick={(e) => {
            this.handleClick();
          }}
          type="button"
          className="btn btn-primary"
        >
          Show{" "}
        </button>
        {this.toggledButon()}
      </div>
    );
  }
}

App.propTypes = {};

export default App;
