const GITHUB_URL : string = "https://api.github.com/repositories";

export default async () : Promise<any> => {
  return await fetch(GITHUB_URL)
    .then(res => res.json())
    .then(json => json)
    .catch(problem => console.error('problem ===>', problem));
}

