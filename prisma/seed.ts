import { PrismaClient } from '@prisma/client';
import { fetchPlanetsData } from './seeds/planets';
import { fetchPeopleData } from './seeds/people';
import { fetchSpeciesData } from './seeds/species';
import { fetchStarshipsData } from './seeds/starships';
import { fetchVehiclesData } from './seeds/vehicles';
const prisma = new PrismaClient();

async function main() {
  const people = await fetchPeopleData();
  const planets = await fetchPlanetsData();
  const species = await fetchSpeciesData();
  const starships = await fetchStarshipsData();
  const vehicles = await fetchVehiclesData();
  await prisma.people.createMany({ skipDuplicates: true, data: people });
  await prisma.planets.createMany({ skipDuplicates: true, data: planets });
  await prisma.species.createMany({ skipDuplicates: true, data: species });
  await prisma.starships.createMany({ skipDuplicates: true, data: starships });
  await prisma.vehicles.createMany({ skipDuplicates: true, data: vehicles });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
