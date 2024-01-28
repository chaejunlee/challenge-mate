import Link from "next/link";
import Donation from "./donation/page";
import "./landing.css";

export default function Landing() {
  return (
    <div>
      <h1 className="h1">Welcome to Challenge Mates!</h1>

<img className="img" src="logo.png" width="200" height="200"></img>

<h2 className="h2">Our Mission Statement</h2>
<p className="paragraph">"At Challengemate, our mission is to empower individuals with the tools, support, and daily guidance they need to transform their lives. <br></br>We believe in the power of companionship and accountability,<br></br> providing a platform where challengers set their goals and take meaningful steps toward achieving them every day. <br></br>Through our innovative approach, we aim to inspire hope, foster resilience, and create lasting positive change, one challenge at a time."
</p>

<img className="img" src="graph.jpg" width="500" height="400"></img>
<h3 className="h3">Graph here</h3>

<h2 className="h2">Rise to the Challenge, Together: Your Companion on the Path to Change!</h2>


<h1 className="h1">Our Impact</h1>
<h2 className="h2">Sub-title</h2>

<div className="content1">
  <div className="red">1</div>
  <div className="green">2</div>
  <div className="blue">3</div>
</div>

<div className="flex flex-col justify-center items-center">
<button className="button1"  type="button">Sign In</button>
<Link className="button2" href="/donation" target="_blank" >Donate</Link>
</div>
   
<footer className="footer"> © Challenge Mates </footer>

    </div>
  );
}
