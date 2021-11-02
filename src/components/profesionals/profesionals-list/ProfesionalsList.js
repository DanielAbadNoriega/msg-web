import React, { useContext } from "react";
import Profesional from "../profesional/Profesional";
import { ProfesionalContext } from "../../../contexts/ProfesionalContext"

function ProfesionalsList() {
  
  const profesionalsContext = useContext(ProfesionalContext)

  const { profesionals } = profesionalsContext;

  console.log("Profesionals", profesionals)

  console.log("Profesionals List!")

  return (
    <div className="container mt-5">
      <h3 className="text-white">Profesionals List</h3>
      <div className="row">
        {profesionals && profesionals.map(profesional => (
          <Profesional 
            key={profesional.id}
            {...profesional}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfesionalsList;
