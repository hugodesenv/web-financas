/*
 Warnings:
 
 - Added the required column `is_client` to the `person` table without a default value. This is not possible if the table is not empty.
 - Added the required column `is_company` to the `person` table without a default value. This is not possible if the table is not empty.
 - Added the required column `is_employee` to the `person` table without a default value. This is not possible if the table is not empty.
 
 */
-- AlterTable
ALTER TABLE
  "person"
ADD
  COLUMN "is_client" BOOLEAN NOT NULL,
ADD
  COLUMN "is_company" BOOLEAN NOT NULL,
ADD
  COLUMN "is_employee" BOOLEAN NOT NULL;