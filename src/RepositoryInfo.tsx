import React from "react";
import { IRepository } from "./types";

interface Props {
  repository: IRepository;
}

function RepositoryInfo(props: Props) {
  const { repository } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={repository.id}>
      <a href={repository.html_url}>
        <div className="px-6 py-4">
          <div className="font-semibold text-l mb-2">
            {repository.full_name}
          </div>
          <div className="text-gray-700 text-base">
            {repository.url}
          </div>
        </div>
      </a>
    </div>
  );
}

export default RepositoryInfo;
