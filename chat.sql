-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2021 at 02:54 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `room_random_number` int(20) NOT NULL,
  `room_message` varchar(500) NOT NULL,
  `sender_id` int(100) NOT NULL,
  `receiver_id` int(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`chat_id`, `room_random_number`, `room_message`, `sender_id`, `receiver_id`, `created_at`) VALUES
(2, 7904, 'a', 4, 3, '2021-01-25 14:59:15'),
(3, 7904, 'kenapa?', 4, 3, '2021-01-25 15:01:37'),
(4, 7904, 'SELECT * FROM room_chat JOIN user ON room_chat.user_b = user.user_id LEFT JOIN chat ON room_chat.room_random_number = chat.room_random_number WHERE room_chat.user_a =1', 4, 3, '2021-01-25 15:02:41'),
(5, 7904, 'hai', 4, 3, '2021-01-25 19:19:06'),
(12, 7904, 'a', 4, 3, '2021-01-25 23:13:44'),
(13, 7904, 'Apaansih Justin', 3, 4, '2021-01-25 23:18:52'),
(14, 7904, 'Btw, kalo diliat liat, kamu mirip sama Mail deh, ngaca coba', 3, 4, '2021-01-26 00:01:05'),
(15, 7904, 'apaansih', 4, 3, '2021-01-26 04:01:31'),
(16, 7904, 'Eh eh, tugas udah ?', 4, 3, '2021-01-26 06:17:40'),
(17, 7904, 'Mohon maaf lahir batin', 4, 3, '2021-01-26 06:46:52'),
(18, 7904, 'Mohon maaf lahir batin juga kak', 3, 4, '2021-01-26 06:49:42'),
(19, 7904, 'Tugas? tugas apa kak btw? Kayaknya kebanyakan libur, saya jadi lupa', 3, 4, '2021-01-26 06:51:18'),
(20, 7904, 'Tugas kalkulus, yaampun. Untung kuingetin, kalo nggak, bisa anjlok nilai tugasmu', 4, 3, '2021-01-26 06:55:14'),
(21, 7904, 'Oiya ya, btw makasih banyak ya kak. Untung temenan di telegram juga ya kak, jadi komunikasi lancar jaya', 3, 4, '2021-01-26 06:58:52'),
(22, 7904, 'Sama-sama, terbaik emang Telegram', 4, 3, '2021-01-26 07:00:16'),
(23, 1882, 'hai', 3, 1, '2021-02-20 15:47:51'),
(24, 7904, 'hai', 3, 4, '2021-02-21 11:59:26'),
(25, 7904, 'a', 3, 4, '2021-02-21 12:02:26'),
(26, 7904, 'b', 3, 4, '2021-02-21 12:02:34'),
(27, 1882, 'aku', 3, 1, '2021-02-21 12:05:11'),
(28, 7904, 'abcd', 3, 4, '2021-02-21 14:20:24'),
(29, 1882, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda praesentium quam officia optio animi repellendus facilis numquam minus? Illo dolores cum dolore numquam ea odit possimus inventore deleniti libero.', 3, 1, '2021-02-21 14:22:27'),
(30, 7904, 'haii', 4, 3, '2021-02-23 14:28:57'),
(31, 7904, 'apa seh', 3, 4, '2021-02-23 15:32:59'),
(32, 7904, 'Jakarta banjir ya Tin', 3, 4, '2021-02-23 16:53:02'),
(33, 1882, 'Ky, kok nggak pernah dibales Ky?', 3, 1, '2021-02-23 19:39:05'),
(34, 1882, 'Loha', 3, 1, '2021-02-25 00:37:04'),
(35, 1882, 'Halooo', 3, 1, '2021-02-25 00:37:25'),
(36, 1882, 'haii', 3, 1, '2021-02-25 00:38:39'),
(37, 1882, 'Test', 3, 1, '2021-02-25 00:42:35'),
(38, 1882, 'abc', 3, 1, '2021-02-25 00:49:59'),
(39, 7904, 'message', 3, 4, '2021-02-25 00:53:49'),
(40, 7904, 'a', 3, 4, '2021-02-25 03:33:31'),
(41, 7904, 'bcdefg', 3, 4, '2021-02-25 03:37:22'),
(42, 1882, 'haii', 3, 1, '2021-02-25 03:37:42'),
(43, 1882, 'haii', 3, 1, '2021-02-25 03:37:56'),
(44, 7904, 'hehehehe', 3, 4, '2021-02-25 03:38:11'),
(45, 7904, 'blabla', 3, 4, '2021-02-25 03:39:59'),
(46, 1882, 'efgh', 3, 1, '2021-02-25 03:46:37'),
(47, 7904, 'abcdef', 4, 3, '2021-02-25 03:48:07'),
(48, 7904, 'ya', 4, 3, '2021-02-25 03:48:36'),
(49, 7904, 'test', 4, 3, '2021-02-25 03:50:26'),
(50, 7904, 'haii', 3, 4, '2021-02-25 04:03:20'),
(51, 7904, 'haii', 3, 4, '2021-02-25 04:03:50'),
(52, 7904, 'test ya', 3, 4, '2021-02-25 04:19:37'),
(53, 7904, 'aaa', 3, 4, '2021-02-25 04:20:45'),
(54, 7904, 'haii', 3, 4, '2021-02-25 06:48:47'),
(55, 1882, 'haii', 3, 1, '2021-02-25 06:56:27'),
(56, 1882, 'alhamdulillah', 3, 1, '2021-02-25 06:56:46'),
(57, 7904, 'kenapa Din', 4, 3, '2021-02-25 06:58:14'),
(58, 7904, 'haii', 3, 4, '2021-02-25 07:02:07'),
(59, 7904, 'ape', 4, 3, '2021-02-25 07:02:14');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `contacts_id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `friend_id` int(100) NOT NULL,
  `friend_status` int(2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`contacts_id`, `user_id`, `friend_id`, `friend_status`, `created_at`) VALUES
(1, 1, 2, 1, '2021-01-22 01:48:52'),
(2, 1, 3, 1, '2021-01-23 20:31:19'),
(3, 2, 1, 1, '2021-01-23 20:59:32'),
(8, 3, 1, 1, '2021-01-23 21:36:16'),
(13, 4, 3, 1, '2021-01-24 08:25:15'),
(14, 3, 4, 1, '2021-01-24 08:28:59'),
(15, 4, 5, 0, '2021-01-26 03:59:56'),
(16, 4, 1, 1, '2021-01-26 06:39:34'),
(17, 1, 3, 1, '2021-01-26 06:40:57'),
(18, 1, 4, 1, '2021-01-26 06:41:53');

-- --------------------------------------------------------

--
-- Table structure for table `room_chat`
--

CREATE TABLE `room_chat` (
  `room_id` int(11) NOT NULL,
  `room_random_number` int(20) NOT NULL,
  `user_a` int(100) NOT NULL,
  `user_b` int(100) NOT NULL,
  `last_message` varchar(225) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_chat`
--

INSERT INTO `room_chat` (`room_id`, `room_random_number`, `user_a`, `user_b`, `last_message`, `created_at`, `updated_at`) VALUES
(1, 7904, 4, 3, 'ape', '2021-01-24 21:31:42', '2021-02-25 07:02:15'),
(8, 7904, 3, 4, 'ape', '2021-01-25 23:13:44', '2021-02-25 07:02:15'),
(9, 1882, 3, 1, 'alhamdulillah', '2021-02-20 15:47:09', '2021-02-25 06:56:46'),
(10, 1882, 1, 3, 'alhamdulillah', '2021-02-20 15:47:51', '2021-02-25 06:56:46');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(100) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_photo` varchar(255) NOT NULL,
  `user_location` varchar(255) NOT NULL,
  `user_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_updated_at` datetime NOT NULL,
  `user_status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_photo`, `user_location`, `user_created_at`, `user_updated_at`, `user_status`) VALUES
(1, 'Risky Amalia Haris', 'amaliaharisr@gmail.com', '$2b$10$zQgE1hNrBCfYo..E6Qstwe1CACbfmBG8e5i.PPxr7YO5hmA1or1LS', '2021-01-24T08-51-21.161ZSyifa.png', '-5.200518199999999, 119.4759521', '2021-01-20 20:19:46', '2021-01-26 02:07:11', 1),
(2, 'Huwaida Azzahra', 'iloverohis159@gmail.com', '$2b$10$dtxGG0DNLZnmgH9sm.q57ewxHa8/TwOSByUaF5KEA9JFwaUNk6b8.', '2021-01-23T13-49-20.131Zprofile5.jpg', '-5.2226208, 119.4759521', '2021-01-21 16:02:54', '2021-01-24 02:55:01', 1),
(3, 'Dina Aqila Haris', 'dinaaqilahharis@gmail.com', '$2b$10$DuFrv.gXFMxL7h1P70CEb.mzar7mbYOLczSRcuQ4pYWQVtT86Ux86', '2021-02-24T21-32-35.406Zrara.png', '-5.2226208, 119.4759521', '2021-01-23 11:40:22', '2021-02-25 04:32:35', 1),
(4, 'Justin Bieber', 'justinbieber@gmail.com', '$2b$10$g3vScDpsh2gk5Yx5YgStfOD0KVMQO8fhq4w5lAoADM8Zky9znQ2eS', '2021-02-24T21-44-04.777Zprofile4.png', '-5.2226208, 119.4759521', '2021-01-24 07:29:53', '2021-02-25 04:44:04', 1),
(5, 'Meymey', 'meymey@gmail.com', '$2b$10$COa4NurgCSk8CQtipMcEO.NqEoIfaSeW3NYfz2ApcFrOOGRpArIcK', '2021-01-26T03-56-29.224Zunnamed.png', '', '2021-01-26 03:53:51', '2021-01-26 03:56:31', 1),
(6, 'Ehsan', 'Ehsan@gmail.com', '$2b$10$RfUmYIfBLQV7wRAlAIb6buQaSjYkODts.aOb8QSMr0A68gdvtkfHS', '', '', '2021-02-22 04:00:33', '0000-00-00 00:00:00', 0),
(7, 'Jack Lee', 'jacklee@gmail.com', '$2b$10$gULYeQlK9zTuvEEZli3/KeAe.jtwq9prghSCiPpGUswUAzX7rJSly', '', '-5.2226208, 119.4759521', '2021-02-22 18:59:41', '0000-00-00 00:00:00', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`contacts_id`);

--
-- Indexes for table `room_chat`
--
ALTER TABLE `room_chat`
  ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `contacts_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `room_chat`
--
ALTER TABLE `room_chat`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
