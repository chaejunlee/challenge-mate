import Link from "next/link";
import "./landing.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div>
      <div className="grid min-h-[calc(100vh-4rem)] place-content-center bg-gradient-to-b from-cyan-50 to-white">
        <h1 className="max-w-4xl text-balance bg-gradient-to-tr from-indigo-700 to-cyan-500 bg-clip-text p-6 text-center text-8xl font-bold text-transparent">
          Welcome to Challenge Mates!
        </h1>
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
      <div className="bg-gradient-to-b from-white to-amber-50">
        <div className="mx-auto h-[50vh] max-w-4xl">
          <h2 className="bg-gradient-to-tr from-sky-400 to-indigo-500 bg-clip-text text-center text-6xl font-bold text-transparent">
            Our Mission Statement
          </h2>
          <p className="mb-10 mt-16 text-balance text-center text-lg">
            &quot;At Challengemates, our mission is to empower individuals with
            the tools, support, and daily guidance they need to transform their
            lives. We believe in the power of companionship and accountability,
            providing a platform where challengers set their goals and take
            meaningful steps toward achieving them every day. Through our
            innovative approach, we aim to inspire hope, foster resilience, and
            create lasting positive change, one challenge at a time.&quot;
          </p>
        </div>
        <div className="mx-auto h-[80vh] max-w-4xl">
          <h2 className="bg-gradient-to-tr from-sky-400 to-indigo-500 bg-clip-text text-center text-6xl font-bold text-transparent">
            We asked various professionals:
          </h2>
          <p className="mb-10 mt-6 text-balance text-center text-lg">
            What do you think are potential solutions or feasible ways to help
            homeless people in America reintegrate into society?
          </p>
          <div className="flex w-full flex-col gap-4">
            <div>
              <h4 className="h4">
                Providing a helping hand, instilling hope, and changing
                perceptions for the homeless
              </h4>
              <div className="bar bar1 w-full">78%</div>
            </div>
            <div>
              <h4 className="h4">
                Re-education and re-socialization of the homeless
              </h4>
              <div className="bar bar2">85%</div>
            </div>
            <div>
              <h4 className="h4">
                Offering vocational training and job opportunities
              </h4>
              <div className="bar bar3">78%</div>
            </div>
            <div>
              <h4 className="h4">Providing shelter and economic support</h4>
              <div className="bar bar4">74%</div>
            </div>
            <div>
              <h4 className="h4">
                Offering psychological counseling and drug rehabilitation
              </h4>
              <div className="bar bar5">85%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto h-[80vh] max-w-4xl">
          <h2 className="bg-gradient-to-tr from-sky-400 to-indigo-500 bg-clip-text py-6 text-center text-6xl font-bold text-transparent">
            Our Impact
          </h2>
          <h3 className="h3">
            &quot;Community Perspectives on ChallengeMates: <br></br> A Survey
            on Homelessness Initiatives&quot;
          </h3>

          <div className="mt-12 grid grid-cols-3 justify-items-center">
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

          <div className="mt-6 grid grid-cols-3 place-content-center">
            <div className="para">
              <h4 className="h4">Empowering Lives </h4>The Role of
              ChallengeMates in Social Integration and Well-being
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
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-indigo-200 to-white">
        <div className="mx-auto h-[40vh] max-w-4xl">
          <p className="py-2 text-center text-4xl font-bold text-primary">
            Rise to the Challenge, Together:
          </p>
          <p className="py-2 text-center text-4xl font-bold text-primary">
            Your Companion on the Path to Change!
          </p>

          <div className="mt-12 flex items-center justify-center gap-6">
            <Button
              type="button"
              variant="secondary"
              className="px-10 py-8 text-2xl"
            >
              Join Us
            </Button>
            <Button className="px-10 py-8 text-2xl" asChild>
              <Link href="/donation" target="_blank">
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
