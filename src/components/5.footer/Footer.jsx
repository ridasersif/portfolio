import React from "react";
import './Footer.css'

const Footer =()=>{
    return (
        <footer className="footer flex ">
           <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Articles</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Speaking</a>
                </li>
           </ul>
           <p>&copy; 2025 Rida Sersif. All rights reserved.</p>
        </footer>
    );
}
export default Footer;