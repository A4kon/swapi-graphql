-- CreateTable
CREATE TABLE "People" (
    "id" INTEGER NOT NULL,
    "birth_year" TEXT NOT NULL,
    "eye_color" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "homeworld" TEXT NOT NULL,
    "mass" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "skin_color" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "vehicles" TEXT[],
    "starships" TEXT[],
    "species" TEXT[],

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Films" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "episode_id" INTEGER NOT NULL,
    "opening_crawl" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "species" TEXT[],
    "starships" TEXT[],
    "vehicles" TEXT[],
    "characters" TEXT[],
    "planets" TEXT[],
    "url" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "edited" TEXT NOT NULL,

    CONSTRAINT "Films_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starships" (
    "id" INTEGER NOT NULL,
    "MGLT" TEXT NOT NULL,
    "cargo_capacity" TEXT NOT NULL,
    "consumables" TEXT NOT NULL,
    "cost_in_credits" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "hyperdrive_rating" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "max_atmosphering_speed" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passengers" TEXT NOT NULL,
    "films" TEXT[],
    "pilots" TEXT[],
    "starship_class" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Starships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" INTEGER NOT NULL,
    "cargo_capacity" TEXT NOT NULL,
    "consumables" TEXT NOT NULL,
    "cost_in_credits" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "max_atmosphering_speed" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passengers" TEXT NOT NULL,
    "pilots" TEXT[],
    "films" TEXT[],
    "url" TEXT NOT NULL,
    "vehicle_class" TEXT NOT NULL,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Species" (
    "id" INTEGER NOT NULL,
    "average_height" TEXT NOT NULL,
    "average_lifespan" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "eye_colors" TEXT NOT NULL,
    "hair_colors" TEXT NOT NULL,
    "homeworld" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "people" TEXT[],
    "films" TEXT[],
    "skin_colors" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planets" (
    "id" INTEGER NOT NULL,
    "climate" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "diameter" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "films" TEXT[],
    "gravity" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "orbital_period" TEXT NOT NULL,
    "population" TEXT NOT NULL,
    "residents" TEXT[],
    "rotation_period" TEXT NOT NULL,
    "surface_water" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Planets_pkey" PRIMARY KEY ("id")
);
