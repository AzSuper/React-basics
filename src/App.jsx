import { useEffect, useState } from "react";
import text from "./data";
import "./App.css";

function App() {
  const [paragraphs, setParagraphs] = useState([]);

  // Function to generate a random sentence from the 'text' array
  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * text.length);
    return text[randomIndex];
  };

  const handleSubmit = (e, value) => {
    if (value !== "") {
      const numParagraphs = parseInt(value);
      let generatedParagraphs = [];

      for (let i = 0; i < numParagraphs; i++) {
        const randomSentence = getRandomSentence();
        generatedParagraphs.push(randomSentence);
      }

      setParagraphs(generatedParagraphs);
    } else {
      setParagraphs([]);
    }

    e.preventDefault();
  };

  return (
    <main>
      <div className="section">
        <h3>tired of old boring old lorem ipsum ?</h3>
        <form action="" className="lorem-form">
          <label htmlFor="character">paragraph </label>
          <input type="number" name="character" id="generate" />
          <button
            className="btn"
            onClick={(e) => {
              handleSubmit(e, document.getElementById("generate").value);
            }}
          >
            Generate
          </button>
        </form>
        <div className="section-center">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="result">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
