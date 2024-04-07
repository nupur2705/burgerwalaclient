import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Engineer Burger Wala</h2>
            <p>"We're committed to crafting the ultimate 
                taste experience, meticulously 
                refining each flavor to tantalize
                 your taste buds."</p>
                 <br/>
                 <em>Embracing genuine feedback with eloquent expression fosters a culture of growth and empowerment, enriching our journey toward excellence.</em>
                 <strong>All right received @engineerburgerwala </strong>

        </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com/">
            <AiFillYoutube/>
        </a>
        
        <a href="https://www.instagram.com/nupur_kns/">
            <AiFillInstagram/>
        </a>
        <a href="https://github.com/nupur2705">
            <AiFillGithub/>
        </a>
      </aside>
    </footer>
  )
}

export default Footer