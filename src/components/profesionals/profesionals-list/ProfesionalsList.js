import React, { useState, useEffect} from "react";
import Profesional from "../profesional/Profesional";
import profesionalsService from "../../../services/profesionals-service"

function ProfesionalsList() {
  const [ profesionals, setProfesionals ] = useState(null)

  useEffect(() => {
    profesionalsService.list()
      .then(data => setProfesionals(data))
      .catch(error => console.error(error))
  }, [])

  return (
    
      <div className="container mt-5">
        <h3>Profesionals</h3>
        <div className="row">
          {profesionals &&
            profesionals.map((profesional) => (
              <Profesional key={profesional.id} {...profesional} />
            ))}
        </div>
      </div>
    
  );
}

export default ProfesionalsList;
