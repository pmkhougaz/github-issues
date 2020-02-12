import React, { useState, useEffect } from "react";
import getRepositories from "./getRepositories";

interface Props {}
interface Repository {
  id: number;
  name: string;
  url: string;
}

function App(props: Props) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositories().then(results => {
      setRepositories(results);
    });
  }, []);

  return (
    <div>
      <h1>Github Issues</h1>
      <ul>
        {repositories.map((repository: Repository) => {
          return (
            <li>
              <div>
                <b>{repository.name}</b>
                {repository.url}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
