export type Pokemon = {
    name: string;
    url: string;
  };
  
  export const wait = (delay: number = 0) =>
    new Promise((resolve) => {
      setTimeout(() => resolve("waited"), delay);
    });
  
  export const fetchPokemons = async ({
    delay,
    signal: signal,
  }: {
    delay?: number;
    signal?: AbortSignal;
  } = {}): Promise<Pokemon[]> => {
    return fetch("https://pokeapi.co/api/v2/pokemon", { signal })
      .then(
        (res) => res.json(),
        (err) => {
          console.log(err);
        }
      )
      .then((data) => data.results);
  };
  