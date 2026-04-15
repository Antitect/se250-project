-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 15, 2026 at 06:15 PM
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
  `Adopted` tinyint(1) NOT NULL
  CHECK (Age>=0)
) ;

--
-- Dumping data for table `Animals`
--

INSERT INTO `Animals` (`Animal_ID`, `Name`, `Species`, `Breed`, `Age`, `Adopted`) VALUES
(1, 'Max', 'Dog', 'Golden Retriever', 4, 1),
(2, 'Bella', 'Dog', 'German Shepherd', 1, 1),
(3, 'Charlie', 'Dog', 'Border Collie', 3, 1),
(4, 'Lucy', 'Dog', 'Poodle', 14, 1),
(5, 'Buddy', 'Dog', 'Labrador Retriever', 14, 1),
(6, 'Daisy', 'Dog', 'Great Dane', 5, 0),
(7, 'Jack', 'Dog', 'Dachshund', 10, 0),
(8, 'Sadie', 'Dog', 'Beagle', 11, 0),
(9, 'Toby', 'Dog', 'Golden Retriever', 5, 1),
(10, 'Molly', 'Dog', 'German Shepherd', 15, 0),
(11, 'Bailey', 'Cat', 'Siamese', 1, 1),
(12, 'Maggie', 'Cat', 'Persian', 15, 1),
(13, 'Jake', 'Cat', 'American Shorthair', 7, 0),
(14, 'Sophie', 'Cat', 'American Longhair', 9, 0),
(15, 'Rocky', 'Cat', 'Maine Coon', 2, 0),
(16, 'Zoe', 'Cat', 'Sphynx', 16, 0),
(17, 'Cody', 'Cat', 'Siamese', 3, 1),
(18, 'Lily', 'Cat', 'Persian', 9, 0),
(19, 'Buster', 'Cat', 'American Shorthair', 10, 1),
(20, 'Maddie', 'Cat', 'American Longhair', 7, 1),
(21, 'Casey', 'Hamster', 'Syrian', 2, 0),
(22, 'Rosie', 'Hamster', 'Chinese', 2, 0),
(23, 'Riley', 'Hamster', 'Roborovski Dwarf', 3, 1),
(24, 'Gracie', 'Hamster', 'Campbell\'s Dwarf', 2, 0),
(25, 'Bear', 'Hamster', 'Winter White Dwarf', 2, 0),
(26, 'Coco', 'Hamster', 'Syrian', 2, 1),
(27, 'Duke', 'Hamster', 'Chinese', 3, 1),
(28, 'Abby', 'Hamster', 'Roborovski Dwarf', 2, 0),
(29, 'Tucker', 'Hamster', 'Campbell\'s Dwarf', 1, 0),
(30, 'Penny', 'Hamster', 'Winter White Dwarf', 2, 0),
(31, 'Oliver', 'Rat', 'Standard', 2, 1),
(32, 'Chloe', 'Rat', 'Rex', 1, 0),
(33, 'Bentley', 'Rat', 'Dumbo', 2, 0),
(34, 'Sasha', 'Rat', 'Sphynx', 2, 0),
(35, 'Murphy', 'Rat', 'Standard', 1, 1),
(36, 'Luna', 'Rat', 'Rex', 2, 0),
(37, 'Teddy', 'Rat', 'Dumbo', 2, 0),
(38, 'Bailey', 'Rat', 'Sphynx', 2, 0),
(39, 'Harley', 'Rat', 'Standard', 3, 0),
(40, 'Zoe', 'Rat', 'Rex', 1, 0),
(41, 'Milo', 'Rabbit', 'Holland Lop', 6, 0),
(42, 'Sadie', 'Rabbit', 'French Lop', 4, 1),
(43, 'Leo', 'Rabbit', 'Mini Lop', 4, 1),
(44, 'Ruby', 'Rabbit', 'Netherland Dwarf', 9, 0),
(45, 'Finn', 'Rabbit', 'Flemish Giant', 1, 1),
(46, 'Rosie', 'Rabbit', 'Mini Rex', 1, 1),
(47, 'Jasper', 'Rabbit', 'Holland Lop', 4, 0),
(48, 'Piper', 'Rabbit', 'French Lop', 8, 1),
(49, 'Oscar', 'Rabbit', 'Mini Lop', 6, 0),
(50, 'Ellie', 'Rabbit', 'Netherland Dwarf', 4, 0),
(51, 'Louie', 'Snake', 'Corn Snake', 20, 1),
(52, 'Nala', 'Snake', 'Ball Python', 3, 0),
(53, 'Gus', 'Snake', 'Rat Snake', 3, 1),
(54, 'Stella', 'Snake', 'Western Hognose', 16, 0),
(55, 'Sam', 'Snake', 'Milk Snake', 3, 0),
(56, 'Zoe', 'Snake', 'Corn Snake', 18, 1),
(57, 'Henry', 'Snake', 'Ball Python', 12, 1),
(58, 'Lily', 'Snake', 'Rat Snake', 2, 0),
(59, 'Bruno', 'Snake', 'Western Hognose', 5, 0),
(60, 'Bella', 'Snake', 'Milk Snake', 6, 0);

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
