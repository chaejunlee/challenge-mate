import Link from "next/link";
import "./landing.css";
import Image from "next/image";

export default function Landing() {
  return (
    <div>
      <div className="grid h-[calc(100vh-4rem)] place-content-center bg-gradient-to-b from-cyan-50 to-white">
        <h1 className="text-balance bg-gradient-to-tr from-indigo-700 to-cyan-500 bg-clip-text p-6 text-center text-8xl font-bold text-transparent">
          Welcome to Challenge Mates!
        </h1>
        <p className="mx-auto mt-6 max-w-2xl px-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          pharetra, est commodo molestie molestie, est eros fermentum leo, sed
          blandit felis ligula ut lacus. Integer ultrices mollis quam malesuada
          feugiat. Vestibulum feugiat scelerisque semper. Maecenas eget placerat
          lectus. Pellentesque tristique ornare turpis, vel congue urna mattis
          in.
        </p>
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
      <Image className="img" src="/logo.png" alt="" width="200" height="200" />

      <h2 className="h2">Our Mission Statement</h2>
      <p className="paragraph">
        &quot;At Challengemate, our mission is to empower individuals with the
        tools, support, and daily guidance they need to transform their lives.{" "}
        <br></br>We believe in the power of companionship and accountability,
        <br></br> providing a platform where challengers set their goals and
        take meaningful steps toward achieving them every day. <br></br>Through
        our innovative approach, we aim to inspire hope, foster resilience, and
        create lasting positive change, one challenge at a time.&quot;
      </p>

      <Image className="img" src="/graph.jpg" width="500" height="400" alt="" />
      <h3 className="h3">Graph here</h3>

      <h2 className="h2">
        Rise to the Challenge, Together: Your Companion on the Path to Change!
      </h2>

      <h1 className="h1">Our Impact</h1>
      <h2 className="h2">Sub-title</h2>

      <div className="content1">
        <div className="red">1</div>
        <div className="green">2</div>
        <div className="blue">3</div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <button className="button1" type="button">
          Sign In
        </button>
        <Link className="button2" href="/donation" target="_blank">
          Donate
        </Link>
      </div>

      <footer className="footer"> © Challenge Mates </footer>

      <button className="button1" type="button">
        Sign In
      </button>
      <button className="button2" type="button">
        Donate
      </button>
    </div>
  );
}
