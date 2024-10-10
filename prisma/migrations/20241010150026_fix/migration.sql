/*
  Warnings:

  - You are about to drop the column `reviewId` on the `Menu` table. All the data in the column will be lost.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `roasting` on the `Menu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `manufacturing` on the `Menu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_reviewId_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "reviewId",
DROP COLUMN "roasting",
ADD COLUMN     "roasting" "Roasting" NOT NULL,
DROP COLUMN "manufacturing",
ADD COLUMN     "manufacturing" "Manufacturing" NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Review_id_seq";
