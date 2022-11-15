import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these locations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src="/images/img-9.jpg"
            text="Waterfall deep in the Amazon"
            label='Adventure'
            path='/services'
            />
                        <CardItem
            src="/images/img-8.jpg"
            text="Camel trekking across the Sahara"
            label='Luxury'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
            src="/images/img-6.jpg"
            text="Travel through Tokyo city"
            label='Luxury'
            path='/services'
            />
                        <CardItem
            src="/images/img-4.jpg"
            text="Enjoy life on a private island"
            label='Luxury'
            path='/services'
            />
                        <CardItem
            src="/images/img-7.jpg"
            text="Climb breathtaking mountains"
            label='Adventure'
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
