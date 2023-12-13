import { Prisma } from '@prisma/client';

const baseUrl = `https://swapi.dev/api/species/?format=json&page=`;
interface SwapiSpeciesResponse {
  results: Prisma.SpeciesCreateInput[];
  next: string | null;
}
export async function fetchSpeciesData() {
  let currentPage = 1;
  let previous: SwapiSpeciesResponse;
  let species: Prisma.SpeciesCreateInput[];
  do {
    console.log(`Now Fetching page: ${currentPage} for species`);
    const resp = await fetch(`${baseUrl}${currentPage}`);
    const data = (await resp.json()) as SwapiSpeciesResponse;
    previous = data;
    const mappedData = data.results.map((it) => {
      return {
        ...it,
        id: parseInt(it.url.match(/\/(\d+)\/$/)[1]),
      };
    });
    if (!species) {
      species = mappedData;
    } else {
      species = species.concat(mappedData);
    }
    currentPage++;
  } while (previous.next);
  console.log(`Returned: ${species.length}`);
  return species;
}
