import "./style.css";

import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "../_components/main-nav";
import Image from "next/image";
import React from "react";

export default function About() {
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
        <h1 className="h1">About Us</h1>

        <img className="img" src="/logo.png" width="200" height="200"></img>

<p className="paragraph">
We are ChallengeMates, a group of San Jose State University Students and tech professionals looking to build a Social Growth/Re-integration Web Platform by gamification of individual’s growth and accomplishments. 

Our mission statement is “Hope for all, challenge the community for the better.”

The United States Department of Housing and Urban Development estimated that there are 181,399 out of 653,104 people experiencing homelessness in the United States are based in California in January 2023, which accounts for 28% of the national homeless population. This is a growing issue, especially in California and we want to solve this issue by creating a web/phone webapp platform. 

The 3 main strategy of our service/platform as follows: 

Assigning a daily task to “Challengers” consists of low-skilled labor, psychological therapy, drug addiction treatment, and keeping personal hygeine and health
Serve as a liaison/agency between companies and industries that need a working hand (e.g. construction, sanitary services, farming, customer service and restaurants) to give an opportunity for economic activities. 
Connecting pro-bono services from attorneys, therapists and therapist students who need clinical hours, doctors, and cosmetic professionals to revive and recover individual trust and health.  
</p>

        <h2 className="h2">Our Members</h2>

        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="about1.jpeg"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Chaejun Lee</h3>
                <h4 className="title">Frontend Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="about2.png"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Dasom Lee</h3>
                <h4 className="title">Software Engineer</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="about3.png"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Alex Moon</h3>
                <h4 className="title">Researcher</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="about4.png"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Hanbee Cho</h3>
                <h4 className="title">Web Designer</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="about5.png"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Jihyeok Choi</h3>
                <h4 className="title">Firmware Engineer</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="about6.png"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Yongjun Kim</h3>
                <h4 className="title">Software Engineer</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="h2">Contact Us</h2>

        <div id="contactus">
          <h1>&bull; Keep in Touch &bull;</h1>
          <form action="#" method="post" id="contact_form">
            <div className="name">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              ></input>
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
              ></input>
            </div>
            <div className="telephone">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              ></input>
            </div>
            <div className="subject">
              <label htmlFor="subject"></label>
              <select name="subject" id="subject_input" required>
                <option disabled hidden selected>
                  Subject line
                </option>
                <option>I&apos;d like to start a project</option>
                <option>I&apos;d like to ask a question</option>
                <option>I&apos;d like to make a proposal</option>
              </select>
            </div>
            <div className="message">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
              ></textarea>
            </div>
            <div className="submit">
              <input type="submit" value="Send Message" id="htmlForm_button" />
            </div>
          </form>
        </div>
        <ul className="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
</div>


<div id="contactus">
  <h1>&bull; Contact Us &bull;</h1>
  <form action="#" method="post" id="contact_form">
    <div className="name">
      <label htmlFor="name"></label>
      <input type="text" placeholder="My name is" name="name" id="name_input" required></input>
    </div>
    <div className="email">
      <label htmlFor="email"></label>
      <input type="email" placeholder="My e-mail is" name="email" id="email_input" required></input>
    </div>
    <div className="telephone">
      <label htmlFor="name"></label>
      <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required></input>
    </div>
    <div className="subject">
      <label htmlFor="subject"></label>
      <select placeholder="Subject line" name="subject" id="subject_input" required>
        <option disabled hidden selected>Subject line</option>
        <option>I'd like to talk to the agent</option>
        <option>I'd like to ask a question</option>
        <option>I'd like to make a proposal</option>
      </select>
    </div>
    <div className="message">
      <label htmlFor="message"></label>
      <textarea name="message" placeholder="I'd like to chat about" id="message_input"></textarea>
    </div>
    <div className="submit flex flex-col justify-center items-center">
      <input type="submit" value="Send Message" id="htmlForm_button" />
    </div>
  </form>
</div>
        <footer className="footer"> © Challenge Mates </footer>
      </main>
    </>
  );
}
