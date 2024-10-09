import Image from "next/image";
import Link from "next/link";
import React from "react";
import cssStyle from "./blog.module.css";
export default function Home() {
  return (<div>
    <h1>HINA AAMIR</h1>
  <ul>
    <li> HOME</li>
    <li><Link href="/about"  target="_blank"> ABOUT</Link></li>
    <li><Link href="/contact"  target="_blank"> CONTACT</Link></li>
    <li> <Link href="/blog"  target="_blank"> BLOG</Link></li>
    <li> SERVICES</li>
  </ul>
  <h1 className={cssStyle.purple}>THIS IS MY BLOG PAGE</h1>
  <h2>MOM STRESSED</h2>
  <p>A stressed mom often feels overwhelmed by the demands of family, work, and daily life. <br></br>
    She may struggle to find time for herself, juggling responsibilities while trying to be <br></br>
    there for everyone. The pressure can build up, leaving her emotionally and physically<br></br>
     drained. It's important to offer her support and understanding during these times.</p>
  
  </div>);
}