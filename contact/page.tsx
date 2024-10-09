import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Home() {
  return (<div>
    <h1>HINA AAMIR</h1>
  <ul>
    <li> HOME</li>
    <li><Link href="/about"  target="_blank"> ABOUT</Link></li>
    <li> CONTACT</li>
    <li> BLOG</li>
    <li> SERVICES</li>
  </ul>
  <h1>THIS IS MY CONTACT PAGE</h1>
  
  <ol>
    <li>linkdn</li>
    <li>facebook</li>
    <li>instagram</li>
    <li>twitter</li>
    <li>phone #</li>
    <li>email address</li>
  </ol>
  </div>);
}