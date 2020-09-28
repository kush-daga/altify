import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";
import Image from "../../components/Image";
import AltText from "../../components/AltText/AltText";
const Home = () => {
  const [imageLink, setImageLink] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div class={style.home}>
      <h1>Paste an Image Link</h1>
      <form
        onSubmit={(e) => {
          setSubmitted(true);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="file-url"
          value={imageLink}
          onChange={(event) => {
            setImageLink(event.target.value);
            setSubmitted(false);
          }}
        />
        <button type="submit">Confirm</button>
      </form>
      <h2>Output</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#f3f3f3",
          marginTop: "30px",
          padding: "2em",
        }}
      >
        {submitted ? <Image imageLink={imageLink} submitted={submitted} /> : ""}
        {submitted ? (
          <AltText imageLink={imageLink} submitted={submitted} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
