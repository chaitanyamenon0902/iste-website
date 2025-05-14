-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "sig" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "keywords" TEXT[],
    "github_link" TEXT,
    "simulation_link" TEXT,
    "tackled" TEXT,
    "approach" TEXT,
    "mentors" TEXT[],
    "mentees" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
