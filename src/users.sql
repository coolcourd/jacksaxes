CREATE TABLE users (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` varchar(255),
    `last_name` varchar(255),
    `age` int,
    `address` varchar(255),
    `city` varchar(255),
    `zip` int,
    `phone` varchar(255),
    `emergency` varchar(255),
    `date` varchar(255),
    `email` varchar(255),
    `sig` varchar(255),
    `birthday_month` varchar(255),
    `guardian` varchar(255),
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);