import Image from "next/image";
import "./style.css";

import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "../_components/main-nav";
import Image from "next/image";
import React from "react";

export default function Donation() {
  return (
    <>
    <header className="">
        <div className="border-b">
          <div className="flex h-16 items-center px-10">
            <Link href="/">
              <Image src="/logo.png" alt="" width="32" height="32" />
            </Link>
            <MainNav className="mx-6 grow" />
            <Link
              href="/api/auth/signout"
              className="justify-end text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </header>
      <main>
        <h1 className="h1">Donation</h1>
<p className="paragraph">Your support is the cornerstone of our mission. With your generosity, we can provide vital assistance and guidance to individuals striving to overcome challenges and rebuild their lives. Your donation directly fuels our efforts to empower, uplift, and inspire hope in those facing adversity. Together, we can make a profound difference, creating opportunities for growth, resilience, and transformation. Every contribution, no matter the size, has the power to create lasting impact. Join us in our journey to build a community where everyone has the opportunity to thrive. Your kindness today paves the way for a brighter tomorrow. Thank you for being a beacon of hope and a catalyst for positive change.
</p>

<div className="container flex justify-center">
	<table>
		<thead>
			<tr>
				<th>Column 1</th>
				<th>Column 2</th>
				<th>Column 3</th>
				<th>Column 4</th>
				<th>Column 5</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
		</tbody>
	</table>
</div>

<h2 className="h2">With your generosity, we can empower more challengers to tackle their goals, break barriers, and thrive in their communities</h2>

<div className="donation-container">
            
            <div className="donation-box">
	            <div className="title">Donation Information</div>
	            
	            <div className="fields">
		            <input type="text" id="firstName" placeholder="First Name" />
		            <input type="text" id="lastName" placeholder="Last Name" />
		            <input type="text" id="email" placeholder="Email" />
	            </div>
	            
	            <div className="amount">
		            <div className="button">$30</div>
		            <div className="button">$50</div>
		            <div className="button">$100</div>
		            <div className="button">$<input type="text" className="set-amount" placeholder="" /></div>
	            </div>
	            
              
	            {/* <div className="switch">
					<input type="radio" className="switch-input" name="view" value="One-Time" id="one-time" />
					<label htmlFor="one-time" className="switch-label switch-label-off">One-Time</label>
					<input type="radio" className="switch-input" name="view" value="Monthly" id="monthly" />
					<label htmlFor="monthly" className="switch-label switch-label-on">Monthly</label>
					<span className="switch-selection"></span>
			    </div> */}
			    
			    <div className="checkboxes">
					<input type="checkbox" id="receipt" className="checkbox" />
					<label htmlFor="receipt">  Email Me A Receipt</label>
					<br />
					<input type="checkbox" id="anon" className="checkbox" />
					<label htmlFor="anon">  Give Anonymously</label>
					<br />
					<input type="checkbox" id="list" className="checkbox" />
					<label htmlFor="list">  Add Me To Email List</label>
			    </div>
			    
			    <div className="confirm">
				    
			    </div>
	            
	          <div className="donate-button"><i className="fa fa-credit-card"></i> Donate Now</div>
            </div>
        <footer className="footer"> © Challenge Mates </footer>

        </div>
      </main>
    </>
  );
}
