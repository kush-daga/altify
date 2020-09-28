import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";
import Image from "../../components/Image";
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
          }}
        />
        <button type="submit">Confirm</button>
      </form>
      {submitted ? <Image imageLink={imageLink} /> : ""}
    </div>
  );
};

export default Home;
