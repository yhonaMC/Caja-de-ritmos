import React, { Component } from "react";
import Caja from "../Caja/Caja";
import { Box, BoxContent } from "../styled";
import "../../style/index.css";

let Url = "https://heroku-mini-backet.herokuapp.com/bankOne",
  Url1 = "https://heroku-mini-backet.herokuapp.com/bankOne",
  Url2 = "https://heroku-mini-backet.herokuapp.com/BotonesEstadoTwo";

localStorage.getItem("Url") !== null
  ? (Url = localStorage.getItem("Url"))
  : (Url = "https://heroku-mini-backet.herokuapp.com/bankOne");

export default class Recorrido extends Component {
  constructor() {
    super();
    this.state = {
      Sound: [],
    };
  }

  async componentDidMount() {
    let response = await fetch(Url);
    let data = await response.json();
    this.setState({ Sound: data });
    console.log(data);
  }

  handleClick() {
    let Audio = document.createElement("audio");
    Audio.setAttribute("src", Url);
    Audio.play();
  }

  render() {
    return (
      <Box>
        <BoxContent className="col-xl-4">
          {this.state.Sound.map((Sound, index) => {
            return <Caja key={`${Sound}-${index}`} Sounds={Sound} />;
          })}
        </BoxContent>
        <div class="switch-button">
          <input
            type="checkbox"
            name="switch-button"
            id="switch-label"
            onClick={() => {
              if (Url === Url1) {
                localStorage.setItem("Url", Url2);
                window.location = "ReactDOM.render()";
              } else if (Url !== Url1) {
                localStorage.setItem("Url", Url1);
                window.location = "ReactDOM.render()";
              }
            }}
            className="switch-button__checkbox"
          />
          <label for="switch-label" class="switch-button__label"></label>
        </div>
      </Box>
    );
  }
}
