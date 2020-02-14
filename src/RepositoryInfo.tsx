import React from "react";
import { IRepository } from "./types";

interface Props {
  repository: IRepository;
}

function RepositoryInfo(props: Props) {
  const { repository } = props;

  return (
    <div>
      <div>{repository.name}</div>
      <div className="text-center">{repository.url}</div>
    </div>
  );
}

export default RepositoryInfo;
