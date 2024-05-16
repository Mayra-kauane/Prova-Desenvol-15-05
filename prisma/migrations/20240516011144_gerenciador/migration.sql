-- CreateTable
CREATE TABLE `Jogador` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `idade` INTEGER NULL,
    `posicao` VARCHAR(50) NULL,
    `nacionalidade` VARCHAR(50) NULL,

    UNIQUE INDEX `Jogador_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Time` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `anoFundacao` INTEGER NULL,
    `pais` VARCHAR(50) NULL,
    `tecnico` VARCHAR(50) NULL,

    UNIQUE INDEX `Time_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partidas` (
    `id` VARCHAR(191) NOT NULL,
    `data` VARCHAR(100) NOT NULL,
    `local` VARCHAR(50) NULL,
    `placar` VARCHAR(50) NULL,
    `timeCasa` VARCHAR(50) NULL,
    `timeVisitante` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
