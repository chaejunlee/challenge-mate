import Image from "next/image";
import "./landing.css";

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

      <h2 className="h2">Empowering Lives, Ending Homelessness Together</h2>

      <button className="button1" type="button">
        Sign In
      </button>
      <button className="button2" type="button">
        Donate
      </button>
    </div>
  );
}
