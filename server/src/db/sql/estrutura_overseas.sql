-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2024 at 08:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `overseas`
--
CREATE DATABASE IF NOT EXISTS `overseas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `overseas`;

-- --------------------------------------------------------

--
-- Table structure for table `cost_of_living`
--

CREATE TABLE `cost_of_living` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` char(36) NOT NULL,
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
-- Table structure for table `culture_and_language`
--

CREATE TABLE `culture_and_language` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `documentation`
--

CREATE TABLE `documentation` (
  `id` int(100) NOT NULL,
  `country_id` char(36) DEFAULT NULL,
  `required_documents` text DEFAULT NULL,
  `registration_process` text DEFAULT NULL,
  `document_issuance` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `healthcare`
--

CREATE TABLE `healthcare` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `housing`
--

CREATE TABLE `housing` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `job_market`
--

CREATE TABLE `job_market` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `safety`
--

CREATE TABLE `safety` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `social_connections`
--

CREATE TABLE `social_connections` (
  `id` int(100) NOT NULL,
  `country_id` char(36) DEFAULT NULL,
  `expat_communities` text DEFAULT NULL,
  `social_groups` text DEFAULT NULL,
  `local_events` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `transportation`
--

CREATE TABLE `transportation` (
  `id` int(100) NOT NULL,
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
-- Table structure for table `visas`
--

CREATE TABLE `visas` (
  `id` int(100) NOT NULL,
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
-- Indexes for dumped tables
--

--
-- Indexes for table `cost_of_living`
--
ALTER TABLE `cost_of_living`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `iso_code` (`iso_code`);

--
-- Indexes for table `culture_and_language`
--
ALTER TABLE `culture_and_language`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `documentation`
--
ALTER TABLE `documentation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `healthcare`
--
ALTER TABLE `healthcare`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `housing`
--
ALTER TABLE `housing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `job_market`
--
ALTER TABLE `job_market`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `safety`
--
ALTER TABLE `safety`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `social_connections`
--
ALTER TABLE `social_connections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `transportation`
--
ALTER TABLE `transportation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `visas`
--
ALTER TABLE `visas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cost_of_living`
--
ALTER TABLE `cost_of_living`
  ADD CONSTRAINT `cost_of_living_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `culture_and_language`
--
ALTER TABLE `culture_and_language`
  ADD CONSTRAINT `culture_and_language_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `documentation`
--
ALTER TABLE `documentation`
  ADD CONSTRAINT `documentation_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `education_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `healthcare`
--
ALTER TABLE `healthcare`
  ADD CONSTRAINT `healthcare_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `housing`
--
ALTER TABLE `housing`
  ADD CONSTRAINT `housing_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `job_market`
--
ALTER TABLE `job_market`
  ADD CONSTRAINT `job_market_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `safety`
--
ALTER TABLE `safety`
  ADD CONSTRAINT `safety_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `social_connections`
--
ALTER TABLE `social_connections`
  ADD CONSTRAINT `social_connections_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `taxes`
--
ALTER TABLE `taxes`
  ADD CONSTRAINT `taxes_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transportation`
--
ALTER TABLE `transportation`
  ADD CONSTRAINT `transportation_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `visas`
--
ALTER TABLE `visas`
  ADD CONSTRAINT `visas_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
