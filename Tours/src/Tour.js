import React, { useState } from "react";

const Tour = ({ id, title, body, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour card m-4 p-3 w-50">
      <img
        src="https://i.pravatar.cc/150?img=3"
        className="card-img-top"
        alt=""
      />
      <footer>
        <div className="tour-info card-body">
          <h5 className='card-title"'>{title}</h5>
          <p className="card-text">
            {readMore ? body : `${body.substring(0, 100)}...`}
            <button
              className="btn btn-link"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " Show Less" : "Read More"}
            </button>
          </p>
        </div>
        <button
          className="btn btn-outline-danger text-center"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
