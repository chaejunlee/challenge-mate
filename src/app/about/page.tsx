import "./style.css";

import Link from "next/link";
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
          </div>
        </div>
      </header>
      <main>
        <h1 className="h1">About Us</h1>

        <Image
          className="img"
          src="/logo.png"
          alt=""
          width="200"
          height="200"
        />

        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          pharetra, est commodo molestie molestie, est eros fermentum leo, sed
          blandit felis ligula ut lacus. Integer ultrices mollis quam malesuada
          feugiat. Vestibulum feugiat scelerisque semper. Maecenas eget placerat
          lectus. Pellentesque tristique ornare turpis, vel congue urna mattis
          in. Aliquam ac nisi arcu. In hac habitasse platea dictumst. Proin
          hendrerit vestibulum diam nec malesuada. Nullam accumsan imperdiet
          blandit. Aliquam tempus, purus non accumsan dapibus, ex velit accumsan
          diam, eget tincidunt tortor mauris non tortor. Duis vehicula tortor in
          massa pellentesque, a egestas orci suscipit. Morbi non lacus porta
          massa hendrerit ultricies quis ac tellus.
        </p>

        <h2 className="h2">Our Members</h2>

        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <Image
                  className="img-fluid"
                  src="/about1.jpeg"
                  alt=""
                  width="200"
                  height="200"
                />
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
                <Image
                  className="img-fluid"
                  src="/about2.png"
                  alt=""
                  width="200"
                  height="200"
                />
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
                <Image
                  className="img-fluid"
                  src="/about3.png"
                  alt=""
                  width="200"
                  height="200"
                />
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
                <Image
                  className="img-fluid"
                  src="/about4.png"
                  alt=""
                  width="200"
                  height="200"
                />
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
                <Image
                  className="img-fluid"
                  src="/about5.png"
                  alt=""
                  width="200"
                  height="200"
                />
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
                <Image
                  className="img-fluid"
                  src="/about6.png"
                  alt=""
                  height="200"
                  width="200"
                />
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
      </main>
    </>
  );
}
