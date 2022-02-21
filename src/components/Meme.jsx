import React from "react";
import "./Meme.css";

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button">Get a new Meme Image</button>
      </form>
      <img src="" alt="meme" className="meme--image" />
    </main>
  );
};

export default Meme;
