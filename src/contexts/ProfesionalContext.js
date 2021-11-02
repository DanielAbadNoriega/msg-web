import React, { useEffect, useState } from "react";
import profesionalsService from "../services/profesionals-service";

export const ProfesionalContext = React.createContext();

export function ProfesionalContextProvider(props) {
  const [profesionals, setprofesionals] = useState([]);

  useEffect(() => {
    profesionalsService
      .list()
      .then((data) => setprofesionals(data))
      .catch((error) => console.error(error));
  }, []);

  const value = {
    profesionals: profesionals,
  };

  return (
    <ProfesionalContext.Provider value={value}>
      {props.children}
    </ProfesionalContext.Provider>
  );
}