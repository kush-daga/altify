import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function AltText(props) {
  //
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const getAzureData = (imageUrl) => {
    const AZURE_KEY = process.env.PREACT_APP_AZURE_KEY;
    const AZURE_ENDPOINT = process.env.PREACT_APP_AZURE_ENDPOINT;

    fetch(`${AZURE_ENDPOINT}vision/v3.0/describe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": AZURE_KEY,
      },
      body: JSON.stringify({
        url: imageUrl,
      }),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error("Invalid Image URL, or could not detect");
      })
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        setValue(resp);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    console.log(props.imageLink);
    setLoading(true);
    if (props.imageLink && props.submitted) getAzureData(props.imageLink);
  }, [props.imageLink, props.submitted]);

  return (
    <div style={{ marginLeft: "30px", minHeight: "60vh" }}>
      <h1>Alt text suggestions</h1>
      {!loading && value && !error ? (
        <div style={{ overflow: "auto", maxHeight: "50vh" }}>
          <div>
            <h2>Alt Caption</h2>
            <h4>{value.description.captions[0].text}</h4>
          </div>
          <div>
            <h2>Tags</h2>
            <ul
              style={{
                padding: 0,
                margin: 0,
                display: "flex",
                maxWidth: "60vw",
                flexWrap: "wrap",
                gap: "2px 5px",
              }}
            >
              {value.description.tags.map((tag) => {
                return (
                  <li
                    style={{
                      listStyle: "none",
                      background: "black",
                      borderRadius: "5px",
                      padding: "10px",
                      color: "white",
                    }}
                  >
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : error ? (
        <h2>Error Occured: {error.message}</h2>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
