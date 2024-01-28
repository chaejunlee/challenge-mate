import "./style.css";

import { getServerAuthSession } from "@/server/auth";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "../_components/main-nav";

export default async function About() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <>
      <header className="">
        <div className="border-b">
          <div className="flex h-16 items-center px-10">
            <Link href="/">
              <Image src="/logo.png" alt="" width="32" height="32" />
            </Link>
            <MainNav className="mx-6 grow" signedIn={!!session} />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl">
        <h1 className="h1">About Us</h1>

        <Image
          className="img"
          src="/logo.png"
          alt=""
          width="200"
          height="200"
        />

        <p className="paragraph">
          We are ChallengeMates,
          <br></br>a group of San Jose State University Students and tech
          professionals looking to build a Social Growth/Re-integration Web
          Platform by gamification of individual’s growth and accomplishments.
          <br></br>
          <br></br>
          Our mission statement is
        </p>
        <h3 className="h4">
          &quot;Hope for All, Challenge the Community for The Better.&quot;
        </h3>
        <br></br>
        <br></br>
        <p>
          The United States Department of Housing and Urban Development
          estimated that there are 181,399 out of 653,104 people experiencing
          homelessness in the United States are based in California in January
          2023, which accounts for 28% of the national homeless population.
          <br></br>
          This is a growing issue, especially in California and we want to solve
          this issue by creating a web/phone webapp platform.
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
            </div>
          </div>
        </div>

        <div id="contactus">
          <h1 className="h1">&bull; Contact Us &bull;</h1>
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
            <div className="telephone">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              />
            </div>
            <div className="subject">
              <label htmlFor="subject"></label>
              <select name="subject" id="subject_input" required>
                <option disabled hidden selected>
                  Subject line
                </option>
                <option>I&apos;d like to talk to the agent</option>
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
            <div className="submit flex flex-col items-center justify-center">
              <input type="submit" value="Send Message" id="form_button" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
