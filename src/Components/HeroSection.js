import React from 'react';
import Restaurant from '../assets/restauranfood.jpg';

const HeroSection = () => {
    return (
        <section className="firstSection">
                <div className="titleContainer">
                    <div>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                    </div>
                    <p>We are a family owned mediterranean restaurant, focused on
                            traditional reciepies served with a modern twist.
                    </p>
                    <button className="reserveBtn">Reserve a Table</button>
                </div>
                <div className="imgContainer">
                        <img src={Restaurant} alt="foodImg"/>
                </div>
            </section>
    );
};

export default HeroSection;