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

--
-- Dumping data for table `cost_of_living`
--

INSERT INTO `cost_of_living` (`id`, `country_id`, `average_food_cost`, `average_transportation_cost`, `average_utilities_cost`, `average_entertainment_cost`, `created_at`, `updated_at`) VALUES
(1, 'canada', 400, 150, 200, 250, '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 300, 100, 150, 100, '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 500, 200, 250, 300, '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 250.5, 100.75, 150.6, 80.25, '2024-08-18 23:03:04', '2024-08-18 23:03:04'),
(5, 'usa', 300.8, 120.3, 200.45, 100.9, '2024-08-18 23:03:04', '2024-08-18 23:03:04');

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `iso_code`, `continent`, `capital`, `official_language`, `currency`, `population`, `area`, `created_at`, `updated_at`) VALUES
('brazil', 'Brazil', 'BRA', 'South America', 'Brasília', 'Portuguese', 'BRL', 213000000, 8515770, '2024-08-18 23:01:55', '2024-08-18 23:01:55'),
('canada', 'Canada', 'CAN', 'North America', 'Ottawa', 'English, French', 'CAD', 38000000, 9984670, '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
('gb', 'United Kingdom', 'GBR', 'Europe', 'London', 'English', 'GBP', 67000000, 242495, '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
('mexico', 'Mexico', 'MEX', 'North America', 'Mexico City', 'Spanish', 'MXN', 128900000, 1964380, '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
('usa', 'United States', 'USA', 'North America', 'Washington, D.C.', 'English', 'USD', 331000000, 9833520, '2024-08-18 23:01:55', '2024-08-18 23:01:55');

--
-- Dumping data for table `culture_and_language`
--

INSERT INTO `culture_and_language` (`id`, `country_id`, `official_languages`, `common_languages`, `cultural_norms`, `public_holidays`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'English, French', 'English, French', 'Politeness, Multiculturalism', 'Canada Day, Thanksgiving', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Spanish', 'Spanish, Indigenous Languages', 'Family-oriented, Festivals', 'Día de la Independencia, Día de los Muertos', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'English', 'English', 'Queuing, Tea Culture', 'Christmas, Easter', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Portuguese', 'Portuguese, English', 'Family-oriented, Warm greetings', 'New Year, Carnival, Independence Day', '2024-08-18 23:03:18', '2024-08-18 23:03:18'),
(5, 'usa', 'English', 'English, Spanish', 'Individualism, Time-conscious', 'Independence Day, Thanksgiving, Christmas', '2024-08-18 23:03:18', '2024-08-18 23:03:18');

--
-- Dumping data for table `documentation`
--

INSERT INTO `documentation` (`id`, `country_id`, `required_documents`, `registration_process`, `document_issuance`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'Passport, Visa, Work Permit', 'Online application through CIC', 'Issued by IRCC', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Passport, Visa', 'Application at Mexican consulate', 'Issued by SRE', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'Passport, Visa', 'Online application through GOV.UK', 'Issued by Home Office', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Passport, Visa, CPF', 'Submit online, Schedule appointment', 'Issued within 10 days', '2024-08-18 23:03:32', '2024-08-18 23:03:32'),
(5, 'usa', 'Passport, Visa, Social Security Number', 'Submit online, Visit local office', 'Issued within 14 days', '2024-08-18 23:03:32', '2024-08-18 23:03:32');

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `country_id`, `system_type`, `average_cost`, `top_schools`, `university_admission_process`, `language_requirements`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'Public', 15000, 'University of Toronto, UBC', 'Apply through universities', 'English, French proficiency', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Public', 5000, 'UNAM, ITESM', 'Apply through universities', 'Spanish proficiency', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'Public', 12000, 'University of Oxford, University of Cambridge', 'Apply through UCAS', 'English proficiency', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Public and Private', 2000.5, 'USP, Unicamp, UFRJ', 'ENEM exam, University-specific tests', 'Portuguese', '2024-08-18 23:03:42', '2024-08-18 23:03:42'),
(5, 'usa', 'Public and Private', 35000.8, 'Harvard, MIT, Stanford', 'SAT/ACT, College-specific requirements', 'English', '2024-08-18 23:03:42', '2024-08-18 23:03:42');

--
-- Dumping data for table `healthcare`
--

INSERT INTO `healthcare` (`id`, `country_id`, `system_type`, `insurance_requirements`, `average_cost`, `hospitals_quality`, `emergency_numbers`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'Public', 'Provincial health insurance', 0, 'High', '911', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Public and Private', 'IMSS or private insurance', 100, 'Moderate', '911', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'Public', 'NHS registration', 0, 'High', '999', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Public (SUS) and Private', 'Required for private care', 120.5, 'High quality in urban areas', '192', '2024-08-18 23:03:52', '2024-08-18 23:03:52'),
(5, 'usa', 'Private', 'Mandatory for most', 400.75, 'Varies widely by state', '911', '2024-08-18 23:03:52', '2024-08-18 23:03:52');

--
-- Dumping data for table `housing`
--

INSERT INTO `housing` (`id`, `country_id`, `average_rent`, `average_property_price`, `popular_areas`, `rental_process`, `buying_process`, `created_at`, `updated_at`) VALUES
(1, 'canada', 1500, 500000, 'Toronto, Vancouver', 'Apply through rental agencies', 'Real estate agents, Notary', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 800, 200000, 'Mexico City, Cancún', 'Lease agreements', 'Notary, Real estate agents', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 1800, 400000, 'London, Manchester', 'Apply through letting agents', 'Solicitor, Real estate agents', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 500, 3000, 'São Paulo, Rio de Janeiro', 'Background check, Deposit required', 'Notary process, Financing available', '2024-08-18 23:04:00', '2024-08-18 23:04:00'),
(5, 'usa', 1200.5, 5000, 'New York, Los Angeles', 'Credit check, First month rent upfront', 'Mortgage process, Legal documentation', '2024-08-18 23:04:00', '2024-08-18 23:04:00');

--
-- Dumping data for table `job_market`
--

INSERT INTO `job_market` (`id`, `country_id`, `major_industries`, `average_salary`, `unemployment_rate`, `work_permit_requirements`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'Technology, Natural Resources', 50000, 5, 'Work Permit required for foreigners', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Manufacturing, Tourism', 10000, 3.5, 'Work Visa required for foreigners', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'Finance, Healthcare', 40000, 4, 'Work Visa required for foreigners', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Agriculture, Manufacturing, Services', 1000.75, 12.5, 'Work visa, Contract with employer', '2024-08-18 23:04:09', '2024-08-18 23:04:09'),
(5, 'usa', 'Technology, Finance, Healthcare', 4500.6, 4.5, 'Work visa, Employer sponsorship', '2024-08-18 23:04:09', '2024-08-18 23:04:09');

--
-- Dumping data for table `safety`
--

INSERT INTO `safety` (`id`, `country_id`, `crime_rate`, `safe_areas`, `emergency_contacts`, `safety_tips`, `created_at`, `updated_at`) VALUES
(1, 'canada', 1.5, 'Ottawa, Calgary', '911', 'Stay alert in urban areas', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 3.5, 'Merida, San Miguel de Allende', '911', 'Avoid certain areas at night', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 2, 'Cambridge, Bath', '999', 'Be cautious with belongings', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 45.5, 'Brasília, Curitiba', '192, 193', 'Avoid isolated areas at night, Stay alert in crowded places', '2024-08-18 23:04:21', '2024-08-18 23:04:21'),
(5, 'usa', 25, 'Boston, Seattle', '911', 'Be cautious in unfamiliar areas, Keep personal belongings secure', '2024-08-18 23:04:21', '2024-08-18 23:04:21');

--
-- Dumping data for table `social_connections`
--

INSERT INTO `social_connections` (`id`, `country_id`, `expat_communities`, `social_groups`, `local_events`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'Toronto Expat Group, Vancouver International', 'Meetup, InterNations', 'Toronto International Film Festival', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Mexico City Expat Group, Cancún Expats', 'Facebook Groups, Meetup', 'Dia de los Muertos Parade', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'London Expat Group, Manchester Expats', 'Meetup, InterNations', 'Notting Hill Carnival', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Expats in São Paulo, Rio Expats', 'Sports clubs, Language exchange groups', 'Carnival, São João Festival', '2024-08-18 23:04:31', '2024-08-18 23:04:31'),
(5, 'usa', 'Expats in NYC, Bay Area Expats', 'Meetup groups, Professional networks', '4th of July, Thanksgiving Parades', '2024-08-18 23:04:31', '2024-08-18 23:04:31');

--
-- Dumping data for table `taxes`
--

INSERT INTO `taxes` (`id`, `country_id`, `income_tax_rate`, `sales_tax_rate`, `property_tax_rate`, `double_taxation_treaties`, `tax_filing_process`, `created_at`, `updated_at`) VALUES
(1, 'canada', 25, 5, 1, 'USA, UK', 'Online filing through CRA', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 20, 16, 0.5, 'USA, Canada', 'Online filing through SAT', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 20, 20, 0.7, 'USA, Canada', 'Online filing through HMRC', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 27.5, 17, 1.5, 'Brazil-USA Tax Treaty', 'Online filing, Local accountant assistance', '2024-08-18 23:04:39', '2024-08-18 23:04:39'),
(5, 'usa', 37, 8, 1.1, 'USA-Brazil Tax Treaty', 'E-filing, CPA services', '2024-08-18 23:04:39', '2024-08-18 23:04:39');

--
-- Dumping data for table `transportation`
--

INSERT INTO `transportation` (`id`, `country_id`, `public_transportation`, `average_cost`, `driving_requirements`, `ride_sharing_options`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'Bus, Subway, Train', 100, 'Driver’s license, Insurance', 'Uber, Lyft', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Bus, Metro', 50, 'Driver’s license, Insurance', 'Uber, Didi', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'Bus, Underground, Train', 150, 'Driver’s license, Insurance', 'Uber, Bolt', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Buses, Metro, Trains', 1.5, 'Valid driver’s license, Insurance required', 'Uber, 99', '2024-08-18 23:04:49', '2024-08-18 23:04:49'),
(5, 'usa', 'Subways, Buses, Regional trains', 2.75, 'Driver’s license, Vehicle registration', 'Uber, Lyft', '2024-08-18 23:04:49', '2024-08-18 23:04:49');

--
-- Dumping data for table `visas`
--

INSERT INTO `visas` (`id`, `country_id`, `type`, `requirements`, `application_process`, `processing_time`, `cost`, `validity`, `created_at`, `updated_at`) VALUES
(1, 'canada', 'Tourist Visa', 'Passport, Financial Proof', 'Online through CIC', '2-4 weeks', 100, '6 months', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(2, 'mexico', 'Tourist Visa', 'Passport, Return Ticket', 'Application at Mexican Consulate', '1-2 weeks', 36, '6 months', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(3, 'gb', 'Tourist Visa', 'Passport, Financial Proof', 'Online through GOV.UK', '2-3 weeks', 95, '6 months', '2024-08-18 23:22:45', '2024-08-18 23:22:45'),
(4, 'brazil', 'Tourist Visa', 'Passport, Return ticket, Financial proof', 'Online application, Interview', '10 business days', 40, '90 days', '2024-08-18 23:04:57', '2024-08-18 23:04:57'),
(5, 'usa', 'B1/B2 Visa', 'Passport, DS-160 form, Financial proof', 'Online application, Embassy interview', '15 business days', 160, '10 years', '2024-08-18 23:04:57', '2024-08-18 23:04:57');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
