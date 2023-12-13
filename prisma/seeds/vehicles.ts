import { Prisma } from '@prisma/client';

const baseUrl = `https://swapi.dev/api/vehicles/?format=json&page=`;
interface SwapiVehiclesResponse {
  results: Prisma.VehiclesCreateInput[];
  next: string | null;
}
export async function fetchVehiclesData() {
  let currentPage = 1;
  let previous: SwapiVehiclesResponse;
  let vehicles: Prisma.VehiclesCreateInput[];
  do {
    console.log(`Now Fetching page: ${currentPage} for vehicles`);
    const resp = await fetch(`${baseUrl}${currentPage}`);
    const data = (await resp.json()) as SwapiVehiclesResponse;
    previous = data;
    const mappedData = data.results.map((it) => {
      return {
        ...it,
        id: parseInt(it.url.match(/\/(\d+)\/$/)[1]),
      };
    });
    if (!vehicles) {
      vehicles = mappedData;
    } else {
      vehicles = vehicles.concat(mappedData);
    }
    currentPage++;
  } while (previous.next);
  console.log(`Returned: ${vehicles.length}`);
  return vehicles;
}
