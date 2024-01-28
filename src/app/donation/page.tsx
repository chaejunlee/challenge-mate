import "./style.css";
import Link from "next/link";
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
        <h1 className="h1">Donate Today</h1>

<h4 className="h4">Your support is the cornerstone of our mission.</h4>


<p className="paragraph">
    With your generosity, we can provide vital assistance and guidance to individuals striving to overcome challenges and rebuild their lives. 
   <br></br>
    Your donation directly fuels our efforts to empower, uplift, and inspire hope in those facing adversity. 
    <br></br>
    Together, we can make a profound difference, creating opportunities for growth, resilience, and transformation. 
    <br></br>
    Every contribution, no matter the size, has the power to create lasting impact. 
    <br></br>
    Join us in our journey to build a community where everyone has the opportunity to thrive. 
    <br></br>
    Your kindness today paves the way for a brighter tomorrow. Thank you for being a beacon of hope and a catalyst for positive change.
</p>

<h3 className="h3">2023 HUD Annual Homeless Assessment Report Data</h3>
<h4 className="h4">Total number of people experiencing homelessness in the United States: 653,104</h4>
<div className="container flex justify-center">
	<table>

        <thead>
			<tr>
				<th>Sheltered</th>
				<th>Unsheltered</th>
			</tr>
		</thead>

		<tbody>
			<tr>
				<td>396,494</td>
				<td>256,610</td>
			</tr>
            </tbody>

            <thead>
			<tr>
				<th>Men</th>
				<th>Women</th>
			</tr>
		</thead>
        <tbody>
			<tr>
				<td>395,160</td>
				<td>250,009</td>
			</tr>
            </tbody>

            <thead>
			<tr>
				<th>Veterans</th>
				<th>Chronically homeless</th>
			</tr>
		</thead>

        <tbody>
			<tr>
				<td>35,574</td>
				<td>154,313</td>
			</tr>
            </tbody>

            <thead>
			<tr>
				<th>Families with children</th>
				<th>Unaccompanied youth</th>
			</tr>
		</thead>

        <tbody>
			<tr>
				<td>186,084</td>
				<td>34,703</td>
			</tr>
            </tbody>
		
		


	</table>
</div>

<img className="img" src="logo.png" width="300" height="300"></img>

<h4 className="h4">"With your generosity, we can empower more challengers 
<br></br>
to tackle their goals, break barriers, and thrive in their communities."</h4>

            <div className="amount">
              <div className="button">$30</div>
              <div className="button">$50</div>
              <div className="button">$100</div>
              <div className="button">
                $<input type="text" className="set-amount" placeholder="" />
              </div>
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
              <label htmlFor="receipt"> Email Me A Receipt</label>
              <br />
              <input type="checkbox" id="anon" className="checkbox" />
              <label htmlFor="anon"> Give Anonymously</label>
              <br />
              <input type="checkbox" id="list" className="checkbox" />
              <label htmlFor="list"> Add Me To Email List</label>
            </div>

            <div className="confirm"></div>

            <div className="donate-button">
              <i className="fa fa-credit-card"></i> Donate Now
            </div>
          </div>
          <footer className="footer"> © Challenge Mates </footer>
        </div>
      </main>
    </>
  );
}
