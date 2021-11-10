import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2 className="p-3 fw-bold text-info border border-info rounded-pill">
            No Tours Left
          </h2>
          <button className="btn btn-info" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
