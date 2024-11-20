-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(80) NOT NULL,
    "nickname" VARCHAR(80) NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);
