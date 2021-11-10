import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="">
      <div className="text-center">
        <h2 className="fw-bold text-info border border-info rounded-pill">
          Our Tours
        </h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
