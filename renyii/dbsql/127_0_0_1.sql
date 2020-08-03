-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 03, 2020 at 02:56 PM
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
  `student_id` varchar(50) NOT NULL,
  `name` varchar(55) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `school` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mystudents`
--

INSERT INTO `mystudents` (`student_id`, `name`, `contact`, `school`, `type`) VALUES
('213', '123', 'q21312', 'fy3', 'fystudent');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` char(32) NOT NULL,
  `data` text DEFAULT NULL,
  `last_accessed` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `data`, `last_accessed`) VALUES
('0ct7rplrnmr5vrqlovjibnk5lg', 'name|s:6:\"q21312\";id|s:3:\"213\";', '2020-08-03 05:31:52');
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `mystudents`
--

DROP TABLE IF EXISTS `mystudents`;
CREATE TABLE IF NOT EXISTS `mystudents` (
  `student_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(55) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM AUTO_INCREMENT=696970 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mystudents`
--

INSERT INTO `mystudents` (`student_id`, `name`) VALUES
(12, 'hi'),
(170352, 'iam ry'),
(3433, 'test one'),
(145, '&#25439;&#22833;'),
(179334, 'iam ry'),
(179333, 'iam ry'),
(188, 'Hi'),
(170353, 'yes i am'),
(123, 'da'),
(124, 'da'),
(126, 'da'),
(122, 'da'),
(121, 'da'),
(-3, 'da'),
(3452, '&#31245;&#31561;'),
(122355, 'da'),
(1297, 'yes ');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
