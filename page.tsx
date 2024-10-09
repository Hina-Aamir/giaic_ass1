import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  
  
  
  </div>);
}
