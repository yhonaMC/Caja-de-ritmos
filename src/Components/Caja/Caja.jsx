import React, { Component } from "react";

export default class Caja extends Component {
  handleClick(url) {
    let Audio = document.createElement("audio");
    Audio.setAttribute("src", url);
    Audio.play();
  }

  render() {
    const { url, keyTrigger } = this.props.Sounds;

    return (
      <div>
        <div>
          <input
            className="btn btn-success p-4 m-3"
            type="button"
            value={keyTrigger}
            onClick={() => this.handleClick(url)}
          />
        </div>
      </div>
    );
  }
}
