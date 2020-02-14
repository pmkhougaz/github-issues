import React, { useState, useEffect } from "react";
import RepositoryInfo from "./RepositoryInfo";
import getRepositories from "./getRepositories";
import { IRepository } from "./types";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositories().then(results => {
      setRepositories(results);
    });
  }, []);

  return (
    <div>
      <h1>Github Issues</h1>
      {repositories.map((repository: IRepository) => {
        return (
          <RepositoryInfo {...{ repository }} />
        );
      })}
    </div>
  );
}

export default App;
