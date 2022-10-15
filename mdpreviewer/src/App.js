import "./App.css";
import { useState } from "react";
import { marked } from "marked";
import React from "react";
function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `);
  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        rows="10"
        columns="200"
      ></textarea>

      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(text),
        }}
      ></div>
    </div>
  );
}

export default App;
