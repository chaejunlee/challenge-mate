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
          </div>
        </div>
      </header>
      <main>
        <h1 className="h1">Donate Today</h1>

        <h4 className="h4">Your support is the cornerstone of our mission.</h4>

        <p className="paragraph">
          With your generosity, we can provide vital assistance and guidance to
          individuals striving to overcome challenges and rebuild their lives.
          <br></br>
          Your donation directly fuels our efforts to empower, uplift, and
          inspire hope in those facing adversity.
          <br></br>
          <br></br>
          Together, we can make a profound difference, creating opportunities
          for growth, resilience, and transformation.
          <br></br>
          Every contribution, no matter the size, has the power to create
          lasting impact.
          <br></br>
          <br></br>
          Join us in our journey to build a community where everyone has the
          opportunity to thrive.
          <br></br>
          Your kindness today paves the way for a brighter tomorrow.
          <br></br>
          Thank you for being a beacon of hope and a catalyst for positive
          change.
        </p>

        <h2 className="h2">2023 HUD Annual Homeless Assessment Report Data</h2>
        <h4 className="h4">
          Total number of people experiencing homelessness in the United States:
          653,104
        </h4>
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

        <Image
          className="img"
          src="/logo.png"
          width="300"
          height="300"
          alt=""
        />

        <h4 className="h4">
          &quot;With your generosity, we can empower more challengers
          <br></br>
          to tackle their goals, break barriers, and thrive in their
          communities.&quot;
        </h4>

        <div id="contactus">
          <h1>&bull; Donate Here &bull;</h1>
          <form action="#" method="post" id="contact_form">
            <div className="name">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
               />
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
               />
            </div>
            <div className="subject">
              <label htmlFor="subject"></label>
              <select name="subject" id="subject_input" required>
                <option disabled hidden selected>
                  Amount
                </option>
                <option>$10</option>
                <option>$30</option>
                <option>$50</option>
                <option>$100</option>
              </select>
            </div>
            <div className="message">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                placeholder="Custom"
                id="message_input"
              ></textarea>
            </div>
            <label className="container">
              I would like to donate anonymously.
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <div className="submit flex flex-col items-center justify-center">
              <input type="submit" value="Donate" id="form_button" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
