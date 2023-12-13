import { Prisma } from '@prisma/client';

const baseUrl = `https://swapi.dev/api/planets/?format=json&page=`;
interface SwapiPlanetsResponse {
  results: Prisma.PlanetsCreateInput[];
  next: string | null;
}
export async function fetchPlanetsData() {
  let currentPage = 1;
  let previous: SwapiPlanetsResponse;
  let planets: Prisma.PlanetsCreateInput[];
  do {
    console.log(`Now Fetching page: ${currentPage} for planets`);
    const resp = await fetch(`${baseUrl}${currentPage}`);
    const data = (await resp.json()) as SwapiPlanetsResponse;
    previous = data;
    const mappedData = data.results.map((it) => {
      return {
        ...it,
        id: parseInt(it.url.match(/\/(\d+)\/$/)[1]),
      };
    });
    if (!planets) {
      planets = mappedData;
    } else {
      planets = planets.concat(mappedData);
    }
    currentPage++;
  } while (previous.next);
  console.log(`Returned: ${planets.length}`);
  return planets;
}
