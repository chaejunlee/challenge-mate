import Image from "next/image";
import "./style.css";

export default function Donation() {
  return (
    <div>
      <h1 className="h1">Welcome to Challenge Mates!</h1>

      <Image className="img" alt="" src="/logo.png" width="200" height="200" />

      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        pharetra, est commodo molestie molestie, est eros fermentum leo, sed
        blandit felis ligula ut lacus. Integer ultrices mollis quam malesuada
        feugiat. Vestibulum feugiat scelerisque semper. Maecenas eget placerat
        lectus. Pellentesque tristique ornare turpis, vel congue urna mattis in.
        Aliquam ac nisi arcu. In hac habitasse platea dictumst. Proin hendrerit
        vestibulum diam nec malesuada. Nullam accumsan imperdiet blandit.
        Aliquam tempus, purus non accumsan dapibus, ex velit accumsan diam, eget
        tincidunt tortor mauris non tortor. Duis vehicula tortor in massa
        pellentesque, a egestas orci suscipit. Morbi non lacus porta massa
        hendrerit ultricies quis ac tellus.
      </p>

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
