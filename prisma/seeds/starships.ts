import { Prisma } from '@prisma/client';

const baseUrl = `https://swapi.dev/api/starships/?format=json&page=`;
interface SwapiStarshipsResponse {
  results: Prisma.StarshipsCreateInput[];
  next: string | null;
}
export async function fetchStarshipsData() {
  let currentPage = 1;
  let previous: SwapiStarshipsResponse;
  let starships: Prisma.StarshipsCreateInput[];
  do {
    console.log(`Now Fetching page: ${currentPage} for starships`);
    const resp = await fetch(`${baseUrl}${currentPage}`);
    const data = (await resp.json()) as SwapiStarshipsResponse;
    previous = data;
    const mappedData = data.results.map((it) => {
      return {
        ...it,
        id: parseInt(it.url.match(/\/(\d+)\/$/)[1]),
      };
    });
    if (!starships) {
      starships = mappedData;
    } else {
      starships = starships.concat(mappedData);
    }
    currentPage++;
  } while (previous.next);
  console.log(`Returned: ${starships.length}`);
  return starships;
}
