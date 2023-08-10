import React from 'react'
import {motion} from "framer-motion";
import me from "../../assests/founder.jpg";

const Founder = () => {
    const options = {
      initial:{
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x:0,
        opacity:1,
      },
    };
  return (
  <section className="founder">
    <motion.div {...options}>
      <img src={me} alt="Founder" height={200} width={200}/>
      <h3>Deepanshu Yadav</h3>
      <p>Hey, Everyone I am Deepanshu Yadav, the founder of BurgerFusion.<br/>
      Our aim is to provide home like taste to the customers.
      </p>
    </motion.div>
    </section>
  );
}

export default Founder
