import { h } from "preact";

export default function Image(props) {
  return (
    <div>
      <h1>Preview Image</h1>
      <img src={props.imageLink} width="200" alt="image" />
    </div>
  );
}
