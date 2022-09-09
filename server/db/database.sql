CREATE TABLE `todolist` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `item` varchar(255) NOT NULL,
  `completed` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;