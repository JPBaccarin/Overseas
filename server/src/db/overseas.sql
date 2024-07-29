-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Jul-2024 às 20:26
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `overseas`
--
CREATE DATABASE IF NOT EXISTS `overseas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `overseas`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cost_of_living`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `cost_of_living` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `average_food_cost` float DEFAULT NULL,
  `average_transportation_cost` float DEFAULT NULL,
  `average_utilities_cost` float DEFAULT NULL,
  `average_entertainment_cost` float DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `countries`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `countries` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `name` varchar(255) NOT NULL,
  `iso_code` varchar(3) NOT NULL,
  `continent` varchar(255) DEFAULT NULL,
  `capital` varchar(255) DEFAULT NULL,
  `official_language` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `population` int(11) DEFAULT NULL,
  `area` float DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `culture_and_language`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `culture_and_language` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `official_languages` text DEFAULT NULL,
  `common_languages` text DEFAULT NULL,
  `cultural_norms` text DEFAULT NULL,
  `public_holidays` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `documentation`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `documentation` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `required_documents` text DEFAULT NULL,
  `registration_process` text DEFAULT NULL,
  `document_issuance` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `education`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `education` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `system_type` varchar(255) DEFAULT NULL,
  `average_cost` float DEFAULT NULL,
  `top_schools` text DEFAULT NULL,
  `university_admission_process` text DEFAULT NULL,
  `language_requirements` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `healthcare`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `healthcare` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `system_type` varchar(255) DEFAULT NULL,
  `insurance_requirements` text DEFAULT NULL,
  `average_cost` float DEFAULT NULL,
  `hospitals_quality` text DEFAULT NULL,
  `emergency_numbers` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `housing`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `housing` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `average_rent` float DEFAULT NULL,
  `average_property_price` float DEFAULT NULL,
  `popular_areas` text DEFAULT NULL,
  `rental_process` text DEFAULT NULL,
  `buying_process` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `job_market`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `job_market` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `major_industries` text DEFAULT NULL,
  `average_salary` float DEFAULT NULL,
  `unemployment_rate` float DEFAULT NULL,
  `work_permit_requirements` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `safety`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `safety` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `crime_rate` float DEFAULT NULL,
  `safe_areas` text DEFAULT NULL,
  `emergency_contacts` varchar(255) DEFAULT NULL,
  `safety_tips` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `social_connections`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `social_connections` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `expat_communities` text DEFAULT NULL,
  `social_groups` text DEFAULT NULL,
  `local_events` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `taxes`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `taxes` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `income_tax_rate` float DEFAULT NULL,
  `sales_tax_rate` float DEFAULT NULL,
  `property_tax_rate` float DEFAULT NULL,
  `double_taxation_treaties` text DEFAULT NULL,
  `tax_filing_process` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `transportation`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `transportation` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `public_transportation` text DEFAULT NULL,
  `average_cost` float DEFAULT NULL,
  `driving_requirements` text DEFAULT NULL,
  `ride_sharing_options` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `visas`
--
-- Criação: 28-Jul-2024 às 18:12
--

CREATE TABLE `visas` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `country_id` char(36) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `requirements` text DEFAULT NULL,
  `application_process` text DEFAULT NULL,
  `processing_time` varchar(255) DEFAULT NULL,
  `cost` float DEFAULT NULL,
  `validity` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cost_of_living`
--
ALTER TABLE `cost_of_living`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `iso_code` (`iso_code`);

--
-- Índices para tabela `culture_and_language`
--
ALTER TABLE `culture_and_language`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `documentation`
--
ALTER TABLE `documentation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `healthcare`
--
ALTER TABLE `healthcare`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `housing`
--
ALTER TABLE `housing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `job_market`
--
ALTER TABLE `job_market`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `safety`
--
ALTER TABLE `safety`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `social_connections`
--
ALTER TABLE `social_connections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `transportation`
--
ALTER TABLE `transportation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Índices para tabela `visas`
--
ALTER TABLE `visas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cost_of_living`
--
ALTER TABLE `cost_of_living`
  ADD CONSTRAINT `cost_of_living_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `culture_and_language`
--
ALTER TABLE `culture_and_language`
  ADD CONSTRAINT `culture_and_language_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `documentation`
--
ALTER TABLE `documentation`
  ADD CONSTRAINT `documentation_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `education_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `healthcare`
--
ALTER TABLE `healthcare`
  ADD CONSTRAINT `healthcare_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `housing`
--
ALTER TABLE `housing`
  ADD CONSTRAINT `housing_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `job_market`
--
ALTER TABLE `job_market`
  ADD CONSTRAINT `job_market_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `safety`
--
ALTER TABLE `safety`
  ADD CONSTRAINT `safety_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `social_connections`
--
ALTER TABLE `social_connections`
  ADD CONSTRAINT `social_connections_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `taxes`
--
ALTER TABLE `taxes`
  ADD CONSTRAINT `taxes_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `transportation`
--
ALTER TABLE `transportation`
  ADD CONSTRAINT `transportation_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `visas`
--
ALTER TABLE `visas`
  ADD CONSTRAINT `visas_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
