import React from "react";
import chef from './Public/chef.JPG'

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { listSubheaderClasses } from "@mui/material";

const list = [
  "A guaranteed delicious meal",
  "Food is guaranteed hygienic",
  "Cooked quickly",
];

function ChefDetails() {
  return (
    <div className="chef-details-cont">
      <div className="chef-left-cont" style={{ marginLeft: "1rem" }}>
        <div className="content">
          <h1>
            Cooked by the <br /> Best Chefs in the <br /> World
          </h1>
          <span>
            We present the best chefs to cook your food to make <br /> the food
            taste extraordinary
          </span>
          <div className="chef-left-list" style={{ marginTop: "1rem" }}>
            {list.map((item, index) => (
              <div className="list" key={index}>
                <CheckBoxIcon sx={{ color: "rgb(92,181,72)" }} />
                <span style={{ marginLeft: "0.8rem", color: "black" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="chef-right-cont">
        <img src={chef} alt=""  />
      </div>
    </div>
  );
}

export default ChefDetails;
