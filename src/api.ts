import { Filters, Query, Params } from "./types";

const GITHUB_URL = "https://api.github.com";

const filters = (q: Filters): string => {
  return Object.keys(q).reduce((qs: string, key: string) => {
    return qs.concat(`q=${key}:${q[key]}`);
  }, "");
};

const stringify = (query: Query): string => {
  return Object.keys(query).reduce((qs: string, key: string) => {
    return typeof query[key] === 'string'
      ? qs.concat(`${key}=${query[key]}&`)
      : qs.concat(filters(query[key]));
  }, "");
};

const urlFor = (params: Params): string => {
  return params.url + "?" + stringify(params.query);
};

const get = async (params: Params): Promise<any> => {
  return await fetch(urlFor(params))
    .then(res => res.json())
    .then(json => json)
    .catch(problem => console.error("problem ===>", problem));
};

export const getRepositories = (language: string): Promise<any> => {
  return get({
    url: `${GITHUB_URL}/search/repositories`,
    query: {
      since: "daily",
      sort: "stars",
      order: "desc",
      q: {
        language
      }
    }
  });
};
