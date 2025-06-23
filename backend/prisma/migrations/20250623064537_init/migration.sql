/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `email`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `password`,
    DROP COLUMN `role`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `Password` VARCHAR(191) NOT NULL,
    ADD COLUMN `Profile` VARCHAR(191) NULL,
    ADD COLUMN `Role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    ADD COLUMN `UserID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `UserName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`UserID`);

-- CreateTable
CREATE TABLE `Sheet` (
    `SheetID` INTEGER NOT NULL AUTO_INCREMENT,
    `CourseCode` VARCHAR(191) NOT NULL,
    `SheetName` VARCHAR(191) NOT NULL,
    `SheetTerm` INTEGER NOT NULL,
    `SheetYear` INTEGER NOT NULL,
    `SheetPrice` INTEGER NOT NULL,
    `SheetSold` INTEGER NOT NULL,
    `UserID` INTEGER NOT NULL,

    PRIMARY KEY (`SheetID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BuySheets` (
    `BuyID` INTEGER NOT NULL AUTO_INCREMENT,
    `HistoryBuy` DATETIME(3) NOT NULL,
    `Evidence` VARCHAR(191) NOT NULL,
    `StatusBuy` BOOLEAN NOT NULL,
    `SheetID` INTEGER NOT NULL,
    `UserID` INTEGER NOT NULL,

    PRIMARY KEY (`BuyID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sheet` ADD CONSTRAINT `Sheet_UserID_fkey` FOREIGN KEY (`UserID`) REFERENCES `User`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuySheets` ADD CONSTRAINT `BuySheets_SheetID_fkey` FOREIGN KEY (`SheetID`) REFERENCES `Sheet`(`SheetID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuySheets` ADD CONSTRAINT `BuySheets_UserID_fkey` FOREIGN KEY (`UserID`) REFERENCES `User`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;
