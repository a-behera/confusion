import React from "react";
import MenuItem from "./MenuItem";

const MenuList = (props) => {
  return (
    <div>
        <MenuItem
          name={props.dishes[0].name}
          image={props.dishes[0].image}
          description={props.dishes[0].description}
        />
        <MenuItem
          name={props.dishes[1].name}
          image={props.dishes[1].image}
          description={props.dishes[1].description}
        />
        <MenuItem
          name={props.dishes[2].name}
          image={props.dishes[2].image}
          description={props.dishes[2].description}
        />
        <MenuItem
          name={props.dishes[3].name}
          image={props.dishes[3].image}
          description={props.dishes[3].description}
        />
    </div>
  );
};

export default MenuList;
