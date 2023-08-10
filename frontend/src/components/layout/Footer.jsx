import React from 'react'
import {AiFillInstagram,AiFillGithub} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
    <div>
      <p><h2>BurgerFusion</h2></p>
      <p>We are trying to deliever best taste possible.</p>
      <p><em>We give attention to genuine feedback.</em></p>
      <p><strong>All right received @BurgerFusion</strong></p>

    </div>
    <aside>
<h4>Follow Us</h4>
<a href="https://github.com/deepanshu51"><AiFillGithub/></a>
<a href="https://instagram.com/dipanshuyadav_09"><AiFillInstagram/></a>
    </aside>
    </footer>
  )
}

export default Footer
