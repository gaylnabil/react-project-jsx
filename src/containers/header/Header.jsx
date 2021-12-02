import React from "react";
import "./header.css";
import people from './../../assets/people.png';
import ai from './../../assets/ai.png';

const Header = () => {
  return (
    <div id="home" className="nga__header section__padding">
        <div className="nga__header-content" >
          <h1 className="gradient__text">
            Try using this platform for creating an amazing things with OpenCV
          </h1>
          <p>
          Lorem ipsum dolor sit amet, ius ei ridens posidonium reformidans, duo ne reque ornatus. Purto eligendi signiferumque ne vix, ius ei nibh porro. Pro no propriae dignissim. Nobis electram forensibus cu pro, ut doming latine his, no sit nemore explicari repudiandae.
          </p>

          <div className="nga__header-content__input" >
            <input type="email" name="email" id="email" placeholder="Add your email address" />
            <button type="button">Get Started</button>
          </div>

          <div className="nga__header-content__people">
            <img src={people} alt="people" />
            <p>
              1650 people requested access a visit o, last 24 hours
            </p>
          </div>

        </div> 
        <div className="nga__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
