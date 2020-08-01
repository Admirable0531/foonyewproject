-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 01, 2020 at 06:41 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fyp-db`
--
CREATE DATABASE IF NOT EXISTS `fyp-db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `fyp-db`;

-- --------------------------------------------------------

--
-- Table structure for table `mystudents`
--

DROP TABLE IF EXISTS `mystudents`;
CREATE TABLE IF NOT EXISTS `mystudents` (
  `random_id` int(50) NOT NULL,
  `student_id` varchar(50) NOT NULL,
  `name` varchar(55) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `school` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`random_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
--
-- Database: `fyp-db1`
--
CREATE DATABASE IF NOT EXISTS `fyp-db1` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `fyp-db1`;

-- --------------------------------------------------------

--
-- Table structure for table `mystudents`
--

DROP TABLE IF EXISTS `mystudents`;
CREATE TABLE IF NOT EXISTS `mystudents` (
  `student_id` varchar(50) NOT NULL,
  `name` varchar(55) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `school` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
--
-- Database: `session`
--
CREATE DATABASE IF NOT EXISTS `session` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `session`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
