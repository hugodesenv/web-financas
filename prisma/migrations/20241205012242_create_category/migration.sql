-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(80) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);
