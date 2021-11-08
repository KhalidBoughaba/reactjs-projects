import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container card p-4">
        <h2 className="mb-4">{people.length} Birthday Today</h2>
        <List people={people} />
        <button
          className="btn btn-info mt-4 fw-bold"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
