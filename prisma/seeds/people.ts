import { Prisma } from '@prisma/client';

const baseUrl = `https://swapi.dev/api/people/?format=json&page=`;
interface SwapiPeopleResponse {
  results: Prisma.PeopleCreateInput[];
  next: string | null;
}
export async function fetchPeopleData() {
  let currentPage = 1;
  let previous: SwapiPeopleResponse;
  let people: Prisma.PeopleCreateInput[];
  do {
    console.log(`Now Fetching page: ${currentPage} for people`);
    const resp = await fetch(`${baseUrl}${currentPage}`);
    const data = (await resp.json()) as SwapiPeopleResponse;
    previous = data;
    const mappedData = data.results.map((it) => {
      return {
        ...it,
        id: parseInt(it.url.match(/\/(\d+)\/$/)[1]),
      };
    });
    if (!people) {
      people = mappedData;
    } else {
      people = people.concat(mappedData);
    }

    currentPage++;
  } while (previous.next);
  console.log(`Returned: ${people.length}`);
  return people;
}
