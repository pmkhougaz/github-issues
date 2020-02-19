import React, { useState, useEffect } from "react";
import LanguageDropdown from "./LanguageDropdown";
import RepositoryInfo from "./RepositoryInfo";
import { getRepositories } from "./api";
import { IRepository } from "./types";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("Java");

  useEffect(() => {
    Promise.all([getRepositories(selectedLanguage)]).then(([results]) => {
      setRepositories(results.items);
    });
  }, [ selectedLanguage ]);

  return (
    <div>
      <div className="flex bg-gray-100">
        <div className="w-3/4 bg-gray-500 h-12">
          <div className="px-6 py-2 font-bold text-xl tracking-tight">
            Github Issues
          </div>
        </div>
        <div className="w-1/4 bg-gray-200 h-12">
          <div className="w-1/8 text-right">
            <div className="p-3">
              <LanguageDropdown
                {...{
                  options: ["Perl", "Python", "Ruby", "Javascript", "Java"],
                  onSelect: (option: string) => setSelectedLanguage(option),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {repositories.map((repository: IRepository) => {
        return <RepositoryInfo {...{ repository }} />;
      })}
    </div>
  );
}

export default App;
