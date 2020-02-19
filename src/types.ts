export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  url: string;
  html_url: string;
}

export interface Filters {
  [key: string]: string;
  language: string;
}

export interface Query {
  [key: string]: string | any;
  since: string;
  sort: string;
  order: string;
  q: Filters;
}

export interface Params {
  url: string | undefined;
  query: Query;
}