import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">FOOD</option>
              <option value="Rice">Rice</option>
              <option value="Wheat">Wheat</option>
              <option value="Jowar">Jowar</option>
              <option value="Ragi and Bajra">Ragi and Bajra (millets)</option>
              <option value="Sorghum">Sorghum</option>
            </select>
          </div> 
          <div className="categoryMenu">
            <select
              name="spices"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">SPICES</option>
              <option value="Cardamom">Cardamom</option>
              <option value="Nutmeg and mace">Nutmeg and mace</option>
              <option value="Garlic">Garlic</option>
              <option value="Turmeric">Turmeric</option>
              <option value="Ginger">Ginger</option>
              <option value="Dry chillies and peppers">Dry chillies and peppers</option>
              <option value="Coriander">Coriander</option>
              <option value="Anise">Anise</option>
            </select>
          </div> 
          <div className="categoryMenu">
            <select
              name="spices"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">SEEDS AND PULSES</option>
              <option value="Safflower seeds">Safflower seeds</option>
              <option value="Castor oil seeds">Castor oil seeds</option>
              <option value="Pulses">Pulses</option>
              <option value="Sesame seeds">Sesame seeds</option>
              <option value="Cotton seed and lint">Cotton seed and lint</option>
              <option value="Lentil">Lentil</option>
              <option value="Fennel">Fennel</option>

            </select>
          </div> 
          {/* <div className="otherQuickOptions">
            <span onClick={() => setCategory("Rice")} >Rice</span>
            <span onClick={() => setCategory("Wheat")} >Wheat</span>
            <span onClick={() => setCategory("Fruits")} >Fruits</span>
            <span onClick={() => setCategory("Vegetables")} >Vegetables</span>
            <span onClick={() => setCategory("Oil seeds")} >Oil seeds</span>
            <span onClick={() => setCategory("Nuts and Dry fruits")} >Nuts and Dry fruits</span>
            <span onClick={() => setCategory("Spices")} >Spices</span>
          </div> */}
        </div>
        {/* <div className="banner">
          <img src="../../../Images/famerDR.jpg" alt="" />
        </div> */}
      </div>
      {category != null && <DynamicPosts category={category} />}
    </div>
  );
}

export default Banner;
