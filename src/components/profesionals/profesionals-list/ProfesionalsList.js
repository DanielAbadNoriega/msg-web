import React from "react";
import Profesional from "../profesional/Profesional";
import profesionalsData from "../../../data/profesionals.json";

function ProfesionalsList() {
  const profesionals = profesionalsData;
  return (
    <div className="container">
      <h3>Profesionals List</h3>
      <div className="row">
        {profesionals && profesionals.map(profesional => (
          <Profesional 
            {...profesional}
            key={profesional.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfesionalsList;
