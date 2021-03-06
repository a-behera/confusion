import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./components/MenuComponent";

const App = () => {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent/>
    </div>
  );
};

export default App;
