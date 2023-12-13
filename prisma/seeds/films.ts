import { Prisma } from '@prisma/client';

const baseUrl = `https://swapi.dev/api/films/?format=json&page=`;
interface SwapiFilmsResponse {
  results: Prisma.FilmsCreateInput[];
  next: string | null;
}
export async function fetchFilmsData() {
  let currentPage = 1;
  let previous: SwapiFilmsResponse;
  let films: Prisma.FilmsCreateInput[];
  do {
    console.log(`Now Fetching page: ${currentPage} for films`);
    const resp = await fetch(`${baseUrl}${currentPage}`);
    const data = (await resp.json()) as SwapiFilmsResponse;
    previous = data;
    const mappedData = data.results.map((it) => {
      return {
        ...it,
        id: parseInt(it.url.match(/\/(\d+)\/$/)[1]),
      };
    });
    if (!films) {
      films = mappedData;
    } else {
      films = films.concat(mappedData);
    }

    currentPage++;
  } while (previous.next);
  console.log(`Returned: ${films.length}`);
  return films;
}
