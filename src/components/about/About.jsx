import React from 'react'
import {Link} from 'react-router-dom'
import me from "../../assests/image.png"
import {RiFindReplaceLine} from "react-icons/ri";
const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>Engineer BurgerWala</h4>
                <p>At Engineer Burger Wala, we don't just serve burgers; we craft culinary experiences that tantalize the senses and leave you craving more. Join us on a gastronomic adventure where innovation meets tradition, and every bite tells a story of passion, quality, and unparalleled taste.</p>
                <p>Prepare to tantalize your taste buds with our diverse range of burger creations. Click below to explore our full menu and embark on a culinary adventure like no other!</p>
                <Link to ="/"><RiFindReplaceLine/></Link>
                
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="Founder"/>
                        <h3>Nupur</h3>

                    </div>
                    <p>I'm Nupur Satpathy, the proud founder and CEO of Engineer Burger Wala. Our mission? To redefine the burger experience, one delicious bite at a time.

Affiliated with the divine flavors of Heavenly Taste, we're dedicated to crafting burgers that tantalize your taste buds and leave you craving more. At Engineer Burger Wala, we blend culinary expertise with a passion for perfection, ensuring every bite is a heavenly delight.

Join us on a journey of flavor exploration and indulge in burgers that transcend the ordinary. Welcome to Engineer Burger Wala, where every burger is a masterpiece and every customer is cherished.  </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About