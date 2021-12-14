import React, { useState } from "react";
import data from "./data";
import SingleQuestions from "./Question";

function App() {
  const [questins, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {questins.map((question) => {
            return <SingleQuestions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
