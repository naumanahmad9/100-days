import React from "react";
import Title from "../components/Title";
import blue from "../blue-paint.png";

function Home() {
  return (
    <div class="inner">
      <img src={blue} alt="blue" className="bg-img"/>;
      <Title lineContent="This is the " lineContent2="home page" />
      <div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
          beatae, corrupti quidem, veniam voluptas ratione illum inventore culpa
          voluptatum nisi. Repudiandae consequatur animi magnam!
        </p>
      </div>
    </div>
  );
}

export default Home;
