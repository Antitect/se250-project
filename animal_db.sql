-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 09, 2026 at 09:52 PM
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
-- Database: `animal_db`
--
CREATE DATABASE IF NOT EXISTS `animal_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `animal_db`;

-- --------------------------------------------------------

--
-- Table structure for table `Animals`
--

CREATE TABLE `Animals` (
  `Animal_ID` int(3) NOT NULL,
  `Name` tinytext NOT NULL DEFAULT '\'N/A\'',
  `Species` tinytext NOT NULL,
  `Breed` tinytext NOT NULL,
  `Age` int(2) NOT NULL,
  `Adopted` tinyint(1) NOT NULL,
  CHECK (Age>=0)
) ;

--
-- Dumping data for table `Animals`
--

INSERT INTO `Animals` (`Animal_ID`, `Name`, `Species`, `Breed`, `Age`, `Adopted`) VALUES
(1, 'Tobias', 'Cat', 'Siamese', 3, 0),
(2, 'Sparky', 'Dog', 'Australian Shepherd', 6, 1),
(3, 'George', 'Hamster', 'Syrian', 1, 0),
(4, 'Titan', 'Cat', 'Tabby', 7, 1),
(5, 'Lola', 'Dog', 'German Shepherd', 2, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Animals`
--
ALTER TABLE `Animals`
  ADD PRIMARY KEY (`Animal_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Animals`
--
ALTER TABLE `Animals`
  MODIFY `Animal_ID` int(3) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
