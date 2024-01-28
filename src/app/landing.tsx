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

      <h3 className="h3">What do you think are potential solutions or feasible ways to help homeless people in America reintegrate into society?</h3>
      <div className="graph-cont">
      <h4 className="h4">Providing a helping hand, instilling hope, and changing perceptions for the homeless</h4>
      <div className="bar bar1">78%</div>
      <h4 className="h4">Re-education and re-socialization of the homeless</h4>
      <div className="bar bar2">85%</div>
      <h4 className="h4">Offering vocational training and job opportunities</h4>
      <div className="bar bar3">78%</div>
      <h4 className="h4">Providing shelter and economic support</h4>
      <div className="bar bar4">74%</div>
      <h4 className="h4">Offering psychological counseling and drug rehabilitation</h4>
      <div className="bar bar5">85%</div>
      </div>

      <h2 className="h2">
        Rise to the Challenge, Together: Your Companion on the Path to Change!
      </h2>

      <h1 className="h1">Our Impact</h1>
      <h2 className="h2">"Community Perspectives on ChallengeMates: A Survey on Homelessness Initiatives"</h2>

      <div className="content1">
        <div className="red"> 85% <br></br>Empowering Lives: The Role of ChallengeMates in Social Integration and Well-being</div>
        <div className="green"> 92% <br></br>Community Synergy: The Positive Impact of ChallengeMates Partnerships with Libraries and Services</div>
        <div className="blue"> 71% <br></br>A Call for Action: Public Support for Government Funding in Homelessness Initiatives</div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <button className="button1" type="button">
          Sign In
        </button>
        <Link className="button2" href="/donation" target="_blank">
          Donate
        </Link>
      </div>
    </div>
  );
}
