import React from "react";
//import ReactDOM from "react-dom";
import blogData from "../data/blog";

//const element = <h1 id="header">Overreacted</h1>

//const { container } = render(<Header />);

function Header() {
    return (
      <header> 
        <h1>{blogData.name}</h1>
      </header>
    )
}

console.log(Header)

export default Header
