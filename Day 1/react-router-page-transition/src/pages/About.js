import React from "react";
import Title from "../components/Title";
import red from "../red-paint.png";

function About() {
  return (
    <div class="inner">
      <img src={red} alt="red" className="bg-img"/>;
      <Title lineContent="This is the " lineContent2="about page" />
      <div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti
          facilis placeat in! Nostrum explicabo consequatur, sunt quis laborum
          minus nobis neque qui quaerat, commodi suscipit corrupti, tenetur quas
          est!
        </p>
      </div>
    </div>
  );
}

export default About;
