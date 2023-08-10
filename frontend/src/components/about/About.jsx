import React from 'react';
import me from "../../assests/founder.jpg";
import {Link} from "react-router-dom";
import {RiFindReplaceLine} from "react-icons/ri";

const About = () => {
  return (
    <section className="about">
        <main>
            <h1>About Us</h1>
            <article>
                <h4>BurgerFusion</h4>
                <p>We are BurgerFusion.The place for most tasty burgers on the entire earth.</p>

                <p>Explore the various type of food and burgers.Click below to see the menu</p>
                <Link to="/">
                    <RiFindReplaceLine/>
                </Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="founder"/>
                        <h3>Deepanshu Yadav</h3>
                    </div>
                    <p>I am Deepanshu Yadav, the founder of BurgerFusion.Affiliated to Good taste...</p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About
