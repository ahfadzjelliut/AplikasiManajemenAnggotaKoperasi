-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 31, 2026 at 03:28 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistemmanagekoperasi`
--

-- --------------------------------------------------------

--
-- Table structure for table `anggota`
--

CREATE TABLE `anggota` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `no_anggota` varchar(50) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `nohp` varchar(20) NOT NULL,
  `owner_fo` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `anggota`
--

INSERT INTO `anggota` (`id`, `user_id`, `no_anggota`, `nik`, `tgl_lahir`, `alamat`, `nohp`, `owner_fo`) VALUES
(5, 26, 'AG1', '9887776', '2002-01-08', 'banjarna', '08127861231', 3),
(6, 31, 'AG2', '79878126831', '2026-06-03', 'Banjari', '08179862871', 3),
(8, 33, 'AG3', '97687716522123', '2026-06-09', 'Bandung', '06571623124', 4),
(9, 34, 'AG4', '07651726351723', '2026-05-05', 'Semarang', '01524361524', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nama`, `email`, `password`, `role`, `status`) VALUES
(1, 'admin', 'admin@gmail.com', '$2y$10$AuewLupjpJKOgrFwWcp/K.Sc81Ye17qWFxg8druuQUI.BbgJPa4Sm', 'superadmin', 'aktif'),
(3, 'Budi', 'budi@gmail.com', '$2y$12$jjTT5mYJMTyL66/Fc8Vr5.DhF4hHhfplHjSEJ9orXhGVQL3X2Vnk6', 'fo', 'aktif'),
(4, 'Firmanu', 'firmanu@gmail.com', '$2y$12$NAcncux2ySoQkp9j9QQcQufw56q4JwmQ7z4DvuytWm6ENgBEiHiae', 'fo', 'nonaktif'),
(26, 'lukman', 'lukman@gmail.com', '$2y$12$2cjr8dEixLcrUrWzjG2SAub839YEW1yggGkUOeJmKIemddjyR4.Ua', 'member', 'aktif'),
(31, 'Arif', 'arifumas@gmail.com', '$2y$12$Q6hv2bfUbJnO37FJ8nklfObZ5hXr31MgxlatsY6Xt2p.EaYI0I472', 'member', 'aktif'),
(33, 'silam', 'silaman@gmail.com', '$2y$12$hHuk2aQSnTcf5g3lkKDHJuQWNWHhDD/0ewl3WCFHlXG1vSmBgS38C', 'member', 'aktif'),
(34, 'aman', 'amanu@gmail.com', '$2y$12$VjeSg9evMCGskpkg5GzyBep1uxYfYVhbkvyGmMna15dagTbenTgWq', 'member', 'aktif');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anggota`
--
ALTER TABLE `anggota`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
