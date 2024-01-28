import Link from "next/link";
import "./landing.css";
import Image from "next/image";

export default function Landing() {
  return (
    <div>
      <div className="grid h-[calc(100vh-4rem)] place-content-center bg-gradient-to-b from-cyan-50 to-white">
        <h1 className="max-w-4xl text-balance bg-gradient-to-tr from-indigo-700 to-cyan-500 bg-clip-text p-6 text-center text-8xl font-bold text-transparent">
          Welcome to Challenge Mates!
        </h1>
        {/* <p className="mx-auto mt-6 max-w-2xl px-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          pharetra, est commodo molestie molestie, est eros fermentum leo, sed
          blandit felis ligula ut lacus. Integer ultrices mollis quam malesuada
          feugiat. Vestibulum feugiat scelerisque semper. Maecenas eget placerat
          lectus. Pellentesque tristique ornare turpis, vel congue urna mattis
          in.
        </p> */}
        <div className="mt-6 w-full">
          <Image
            className="img"
            src="/logo.png"
            alt=""
            width="200"
            height="200"
          />
        </div>
      </div>

      <h2 className="h2">Our Mission Statement</h2>
      <p className="paragraph">
        &quot;At Challengemates, our mission is to empower individuals with the
        tools, support, and daily guidance they need to transform their lives.{" "}
        <br></br>We believe in the power of companionship and accountability,
        <br></br> providing a platform where challengers set their goals and
        take meaningful steps toward achieving them every day. <br></br>Through
        our innovative approach, we aim to inspire hope, foster resilience, and
        create lasting positive change, one challenge at a time.&quot;
      </p>

      <h2 className="h2">We asked various professionals:</h2>
      <h3 className="h3">
        What do you think are potential solutions or feasible ways <br></br>to
        help homeless people in America reintegrate into society?
      </h3>
      <div className="graph-cont">
        <h4 className="h4">
          Providing a helping hand, instilling hope, and changing perceptions
          for the homeless
        </h4>
        <div className="bar bar1">78%</div>
        <h4 className="h4">
          Re-education and re-socialization of the homeless
        </h4>
        <div className="bar bar2">85%</div>
        <h4 className="h4">
          Offering vocational training and job opportunities
        </h4>
        <div className="bar bar3">78%</div>
        <h4 className="h4">Providing shelter and economic support</h4>
        <div className="bar bar4">74%</div>
        <h4 className="h4">
          Offering psychological counseling and drug rehabilitation
        </h4>
        <div className="bar bar5">85%</div>
      </div>

      <h2 className="h2">Our Impact</h2>
      <h3 className="h3">
        &quot;Community Perspectives on ChallengeMates: <br></br> A Survey on
        Homelessness Initiatives&quot;
      </h3>

      <div className="all flex flex-row items-center justify-center">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-1">
              <div className="fill-1"></div>
            </div>
            <div className="mask half">
              <div className="fill-1"></div>
            </div>
            <div className="inside-circle"> 85% </div>
          </div>
        </div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-2">
              <div className="fill-2"></div>
            </div>
            <div className="mask half">
              <div className="fill-2"></div>
            </div>
            <div className="inside-circle"> 92% </div>
          </div>
        </div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-3">
              <div className="fill-3"></div>
            </div>
            <div className="mask half">
              <div className="fill-3"></div>
            </div>
            <div className="inside-circle"> 71% </div>
          </div>
        </div>
      </div>

      <div className="content1">
        <div className="para">
          <h4 className="h4">Empowering Lives </h4>The Role of ChallengeMates in
          Social Integration and Well-being
        </div>
        <div className="para">
          <h4 className="h4">Community Synergy </h4> The Positive Impact of
          ChallengeMates Partnerships with Libraries and Services
        </div>
        <div className="para">
          <h4 className="h4">A Call for Action </h4>Public Support for
          Government Funding in Homelessness Initiatives
        </div>
      </div>

      <h2 className="h2">
        Rise to the Challenge, Together: <br></br>Your Companion on the Path to
        Change!
      </h2>

      <div className="flex flex-col items-center justify-center">
        <button className="button1" type="button">
          Join Us
        </button>
        <Link className="button2" href="/donation" target="_blank">
          Donate
        </Link>
      </div>
    </div>
  );
}
