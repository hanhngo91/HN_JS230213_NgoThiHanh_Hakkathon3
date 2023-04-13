import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [count, setCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);

  const handleChangeText = (e) => {
    const text = e.target.value;
    const letterToCount = text.replace(/\s+/g, "");
    const wordsTooCount = text.split(/\s+/).filter((word) => word.length > 0);
    setText(text);
    setWordCount(wordsTooCount.length);
    setCount(letterToCount.length);
    setLineCount(text.split("\n").length);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerrcase = () => {
    setText(text.toLowerCase());
  };

  return (
    <div className="App">
      <h2>
        <i class="fa-brands fa-wordpress-simple"></i> Word Counter
      </h2>
      <div className="count-field">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <i class="fa-regular fa-clipboard"></i> Word
          </li>
          <li>{wordCount}</li>
        </ul>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <i class="fa-solid fa-pen-clip"></i> Letters
          </li>
          <li>{count}</li>
        </ul>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <i class="fa-regular fa-file-lines"></i> Paragraph
          </li>
          <li>{lineCount}</li>
        </ul>
      </div>
      <div>
        <textarea
          id="content"
          value={text}
          onChange={handleChangeText}
          rows="15"
          cols="130"
        />
      </div>
      <div>
        <button onClick={handleUppercase}>Click to Uppercase</button>
        <button onClick={handleLowerrcase}>Click to Lowercase</button>
      </div>
    </div>
  );
}
