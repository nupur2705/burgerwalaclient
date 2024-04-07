import React from 'react'
import {motion} from "framer-motion";
import me from "../../assests/image.png";
const Founder = () => {
  const options={
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:"0",
      opacity:1
    },
  };

  
  return (
    <section className='founder'>
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200}/>
        <h3>Nupur Satpathy</h3>
        <p>Hola Amigos,I am Nupur Satpathy, the founder and CEO of 
          Engineer Burger Wala.
          <br/>
          Embark on a culinary quest with us as we strive to create the most 
          irresistibly delicious burger known to humankind!
          </p>
      </motion.div>
    </section>
  )
}

export default Founder