import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="d-flex align-items-center">
            <img className="rounded-circle w-25 h-25" src={image} alt={name} />
            <div className="ms-4">
              <h3 className="">{name}</h3>
              <p className="text-muted fw-bold">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
