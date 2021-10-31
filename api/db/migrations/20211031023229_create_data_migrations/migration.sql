-- CreateTable
CREATE TABLE `RW_DataMigration` (
    `version` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `startedAt` DATETIME(3) NOT NULL,
    `finishedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`version`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
