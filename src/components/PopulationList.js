import React, { Component } from "react";
import Profile from "./Avatar";
import axios from "axios";

class PopulationList extends Component {
  constructor() {
    super();
    this.state = {
      populations: []
    };
    this.getPopulationsBrastlewark();
  }

  getPopulationsBrastlewark = () => {
    var self = this;
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then(function(response) {
        self.setState({ populations: response.data.Brastlewark.slice(0, 100) });
        console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      //   { friends.map((friend,i) => <li key={i}>{friend}</li>) }
      <div>
        {this.state.populations ? (
          <div className="card-container">
            {this.state.populations.map((avatar, i) => (
              <div className="responsive">
                <Profile population={avatar} />
              </div>
            ))}
          </div>
        ) : (
          "No populations found"
        )}
      </div>
    );
  }
}
export default PopulationList;
