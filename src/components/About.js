import React from "react";

const image = "logo.png"

function About() {
    console.log(props)
    return (
      <aside>
          <img src = {props.image} alt = {"blog logo"}/>
          <p></p>
      </aside>
    )
}

export default About;