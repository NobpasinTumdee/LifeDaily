/*
  Warnings:

  - Added the required column `PdfUrl` to the `Sheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sheet` ADD COLUMN `PdfUrl` VARCHAR(191) NOT NULL;
